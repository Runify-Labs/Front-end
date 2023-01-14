const express = require('express')
const cors = require('cors')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken
  console.log('refreshToken', refreshToken)
  const spotfiyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:5173',
    clientId: '50d6e90a059e426e83f3920f3048b71a',
    clientSecret: 'cd24280508fc4377b9f2b4767b9be430',
    refreshToken
  })

  spotfiyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn
      })
    })
    .catch(err => {
      console.log('Refresh Error', err)
      res.sendStatus(400)
    })
})

app.post('/login', (req, res) => {
  console.log('Login req.body', req.body)
  const code = req.body.code
  const spotfiyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:5173',
    clientId: '50d6e90a059e426e83f3920f3048b71a',
    clientSecret: 'cd24280508fc4377b9f2b4767b9be430'
  })

  spotfiyApi.authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in
      })
    }).catch(err => res.sendStatus(400))
})

app.listen(3000, () => console.log('Listening on port 3000'))