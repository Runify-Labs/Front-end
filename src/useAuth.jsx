import React, { useEffect, useState } from "react";
import axios from 'axios';

const useAuth = (code) => {
  const [accesstoken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    console.log(code)
    axios
      .post('http://localhost:3000/login', {
        code
      })
      .then(res => {
        setAccessToken(res.data.accesstoken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        window.history.pushState({}, null, '/')
        return console.log(res.data)
      })
      .catch(() => {
        window.location = '/'
      })
  }, [code])

  useEffect(() => {
    if(!refreshToken || !expiresIn)
      return
    const interval = setInterval(() => {
      axios
        .post('http://localhost:3000/refresh', {
          refreshToken
        })
        .then(res => {
          setAccessToken(res.data.accesstoken)
          setExpiresIn(res.data.expiresIn)
          return
        })
        .catch(() => {
          window.location = '/'
        })
    }, (expiresIn - 60) * 1000)
    
    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accesstoken
}

export default useAuth;