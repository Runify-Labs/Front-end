import React from "react";

const Login = () => {

  const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=50d6e90a059e426e83f3920f3048b71a&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

  return (
    <>
      <a className="font-bold" href={AUTH_URL}>
        <button>Login with Spotify</button>
      </a>
    </>
  )
}

export default Login;