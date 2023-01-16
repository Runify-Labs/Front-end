import React, { useEffect } from "react";
import musicNote from "./assets/music-note.png"

const Result = ({ item, setSelection, selection }) => {

  var comp;
  var images = item.album.images;
  if(images.length === 0)
    item.album.images[0] = musicNote
  console.log(images)

  if(item.type === 'track') {
    comp = (<div onClick={() => setSelection([...selection, item])}>
      <img src={images[images.length-1].url}/>
      <div>{item.name}</div>
      <div>{item.artists[0].name}</div>
    </div>)
  }

  return (
    <>
      {comp && comp}
    </>
  )
}
export default Result;