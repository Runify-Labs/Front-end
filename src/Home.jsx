import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./useAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: '50d6e90a059e426e83f3920f3048b71a'
})

const Home = ({code}) => {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState();
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  },[accessToken])
  
  useEffect(() => {
    if (!search) set
  }, [search])

  return (
    <>
      {code}
      <form>
        <input type='text' onChange={(event) => setSearch(event.target.value)}></input>
      </form>
    </>
  )
}

export default Home;