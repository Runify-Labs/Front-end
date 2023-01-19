import React, { useEffect, useState } from "react";
import axios from 'axios';
import { SERVERIP, SERVERPORT } from "./config";

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    console.log(`http://${SERVERIP}:${SERVERPORT}/login`)
    console.log(code)
    axios
      .post(`http://${SERVERIP}:${SERVERPORT}/login`, {
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
          console.log(err)
      })
  }, [code])

  useEffect(() => {
    console.log('running refresh useEffect')
    if(!refreshToken || !expiresIn)
      return
    const interval = setInterval(() => {
      axios
        .post(`http://${SERVERIP}:${SERVERPORT}/refresh`, {
          refreshToken
        })
        .then(res => {
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
          return
        })
        .catch((err) => {
          window.location = '/'
          console.log(err)
        })
    }, (expiresIn - 60) * 1000)
    
    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}

export default useAuth;