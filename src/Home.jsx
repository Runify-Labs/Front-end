import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Result from "./Result";
import Recommended from "./Recommended";
import useAuth from "./useAuth";
import Select from "./Select"
import Created from "./Created"

const spotifyApi = new SpotifyWebApi({
  clientId: '50d6e90a059e426e83f3920f3048b71a'
})

const colors = ['#1DB954', '#DFBE99', '#321325', '#5E5B52', '#243119']

const Home = ({code}) => {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState();
  const [searchResults, setSearchResults] = useState([])
  const [album, setAlbum] = useState(true)
  const [artist, setArtist] = useState(true)
  const [track, setTrack] = useState(true)
  const [playlist, setPlaylist] = useState()
  const [type, setType] = useState(['track'])
  const [selection, setSelection] = useState([]);
  const [BPM, setBPM] = useState('');
  const [showCreated, setShowCreated] = useState(false);
  const [playlistURL, setPlaylistURL] = useState();

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])
  
  useEffect(() => {
    // console.log('search useEffect run, access token', accessToken)
    if (!search)
      return setSearchResults([])
    if (!accessToken)
      return
    console.log(type)

    let cancel = false
    spotifyApi.search(search, type).then(res => {
      if (cancel) return
      setSearchResults(res.body[Object.keys(res.body)[0]].items)
      // console.log(res.body[Object.keys(res.body)[0]].items)
      console.log(res.body)
    })
    return () => cancel = true
  }, [search, accessToken])

  // useEffect(() => {
  //   let result = []
  //   if(album) result.push('album') 
  //   if(artist) result.push('artist')
  //   if(track) result.push('track')
  //   if(playlist) result.push('playlist')
  //   setTypes(result)
  // }, [album, artist, track, playlist])

  const handleGenerate = () => {
    const seedTracks = [];
    const seedArtists = [];
    selection.forEach((item) => {
      if(item.type === 'track')
        seedTracks.push(item.id)
    })
    selection.forEach((item) => {
      if(item.type === 'artist')
        seedArtists.push(item.id)
    })
    spotifyApi.getRecommendations({
      min_tempo: BPM-5,
      max_tempo: BPM+5,
      seed_artists: seedArtists,
      seed_tracks: seedTracks,
    }).then(res => {
      console.log('Recommendations', res)
      setPlaylist(res.body.tracks)
      return spotifyApi.getAudioFeaturesForTracks(res.body.tracks.map((item) => item.id))
    }).then((res)=> {
      return console.log('Audio features', res)
    })
    .catch(err => console.log(err))
  }

  const handleCreate = () => {
    const name = `${BPM} BPM - Number ${Math.floor(Math.random() * 101)}` 
    spotifyApi.createPlaylist(name, {public:false})
      .then((res) => {
        console.log(res)
        console.log(res.body.id)
        setPlaylistURL(res.body.external_urls.spotify)
        return spotifyApi.addTracksToPlaylist(res.body.id, playlist.map((item) => item.uri))
      })
      .then((res) => {
        console.log(res)
        setPlaylist(null)
        setSelection([])
        setSearch(null)
        setBPM('')
        setShowCreated(true)
      })
  }

  useEffect(()=> {
    console.log(selection)
    console.log(typeof selection)
  }, [selection])

  return (
    <>
    <div className='flex flex-col'>
      <span className="text-6xl font-bold mb-4">Runify</span>
      <p className="self-start">
            Throw in the cadence you would like to run at!
            If your goal is to push yourself stech a little bit
            but not too much or you wont be able to keep up.
            Use songs or artists you like as seeds to generate a new playlist every time!
      </p>
    </div>
    <div className="flex flex-row items-center justify-center my-4 gap-2">
      <form>
        <input type="text" placeholder="Cadence" className="outline-none p-1 rounded-sm" onChange={(event) => setBPM(event.target.value)}/>
      </form>
      {/* <button onClick={() => setType(['album'])}>Album</button> */}
      <button  className="bg-[#b7b7a4] rounded-2xl px-3 py-1 m-2 border-2 border-black" onClick={() => setType(['artist'])}>Artist</button>
      {/* <button onClick={() => setType(['playlist'])}>Playlist</button> */}
      <button className='bg-[#b7b7a4] rounded-2xl px-3 py-1 m-2 border-2 border-black' onClick={() => setType(['track'])}>Song</button>
      <form>
        <input type='text' placeholder='Search' onChange={(event) => setSearch(event.target.value)}></input>
      </form>
      <button className='bg-[#b7b7a4] rounded-2xl px-3 py-1 m-2 border-2 border-black' onClick={handleGenerate}>Generate Playlist</button>
    </div>
    {selection.map((item, index) => {
      return <Select item={item} index={index} setSelection={setSelection} selection={selection} key={index}/>
    })}
    {searchResults.map((item, key) => {
      return <Result item={item} setSelection={setSelection} selection={selection} key={key}/>
    })}
    {playlist && <Recommended playlist={playlist} handleCreate={handleCreate} />}
    {showCreated && <Created playlistURL={playlistURL}/>}
    </>
  )
}

export default Home;