import React, { useEffect, useState } from "react";
import axios from 'axios';

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    console.log(code)
    axios
      .post('http://localhost:3000/login', {
        code
      })
      .then(res => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        window.history.pushState({}, null, '/')
        // console.log(res.data)
        return
      })
      .catch(() => {
        window.location = '/'
      })
  }, [code])

  useEffect(() => {
    console.log('running refresh useEffect')
    if(!refreshToken || !expiresIn)
      return
    const interval = setInterval(() => {
      axios
        .post('http://localhost:3000/refresh', {
          refreshToken
        })
        .then(res => {
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
          return
        })
        .catch(() => {
          window.location = '/'
        })
    }, (expiresIn - 60) * 1000)
    
    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}

export default useAuth;