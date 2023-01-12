const processResults = (results) => {
  if (results.albums) {
    results.albums = results.albums.items.map((album) => {
      return {
        name: album.name,
        artist: album.artists[0],
        image: album.images[2]
      }
    })
  }
  if (results.artists) {
    results.artists = results.artists.items.map((artist) => {
      return {
        //image and name
      }
    })
  }
  if (results.tracks) {
    results.tracks = results.tracks.items.map((track) => {
      return {
        // 'name, image, artist'
        name: track.name,
        image: track.images[2]
      }
    })
  }
  //playlist => image name
  return results
}

export default processResults