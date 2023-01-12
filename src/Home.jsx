import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Result from "./Result";
import useAuth from "./useAuth";
import Select from "./Select"

const spotifyApi = new SpotifyWebApi({
  clientId: '50d6e90a059e426e83f3920f3048b71a'
})

const Home = ({code}) => {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState();
  const [searchResults, setSearchResults] = useState([])
  const [album, setAlbum] = useState(true)
  const [artist, setArtist] = useState(true)
  const [track, setTrack] = useState(true)
  const [playlist, setPlaylist] = useState(true)
  const [type, setType] = useState(['track'])
  const [selection, setSelection] = useState([]);

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
    // console.log(type)

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

  useEffect(()=> {
    console.log(selection)
    console.log(typeof selection)
  }, [selection])

  return (
    <>
      {code}
      <button onClick={() => setType(['album'])}>Album</button>
      <button onClick={() => setType(['artist'])}>Artist</button>
      <button onClick={() => setType(['playlist'])}>Playlist</button>
      <button onClick={() => setType(['track'])}>Song</button>
      <form>
        <input type='text' placeholder='search' onChange={(event) => setSearch(event.target.value)}></input>
      </form>
      {selection.map((item, index) => {
        return <Select item={item} index={index} setSelection={setSelection} selection={selection} key={index}/>
      })}
      {searchResults.map((item, key) => {
        return <Result item={item} setSelection={setSelection} selection={selection} key={key}/>
      })}
    </>
  )
}

export default Home;