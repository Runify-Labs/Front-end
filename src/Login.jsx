import React from "react";
import running from './assets/stickman-running4.gif'
import spotifyLogo from './assets/Spotify_Logo_RGB_Green2.png'

const Login = () => {

  const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=50d6e90a059e426e83f3920f3048b71a&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-private'

  return (
    <>
      <div className="flex flex-col h-max-screen items-center">
        <span className="text-6xl font-bold mb-4">Runify</span>
        <div className="flex flex-row items-center">
          <span className="font-thin mr-2">In partnership with</span>
          <img src={spotifyLogo} />
        </div>
        <img className="w-1/12" src={running} />
        <a className="bg-[#1DB954] py-2 px-10 m-2 rounded-3xl" href={AUTH_URL}>
          <button className="text-white font-semibold">LOGIN WITH SPOTIFY</button>
        </a>
      </div>
    </>
  )
}

export default Login;