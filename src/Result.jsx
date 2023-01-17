import React, { useEffect } from "react";
import musicNote from "./assets/music-note.png"
import placeholder from "./assets/placeholder.jpg"

const Result = ({ item, setSelection, selection }) => {

  var comp;
  var imgComp;
  if (item.type === 'track') {
    var images = item.album.images;
    if(images.length === 0)
      imgComp = <img src={musicNote} />
    else
      imgComp = <img src={images[images.length-1].url}/>
  } else if ( item.type === 'artist') {
    var images = item.images;
    if(images.length === 0)
      imgComp = <img className='h-24 rounded-full' src={placeholder} />
    else
      imgComp = <img className='h-24 rounded-full' src={images[images.length-1].url}/>
  }
  
  

  if(item.type === 'track') {
    comp = (<div className='flex mb-2 border p-2 rounded-md border-ebony' onClick={() => setSelection([...selection, item])}>
      {imgComp}
      <div className="flex flex-col ml-2 justify-between">
        <div className="text-lg">{item.name}</div>
        <div className="font-thin">{item.artists[0].name}</div>
      </div>
    </div>)
  } else if (item.type === 'artist') {
    comp = (<div className='flex mb-2 border p-2 rounded-md border-ebony' onClick={() => setSelection([...selection, item])}>
      {imgComp}
      <div className="flex flex-col ml-2 justify-between">
        <div className="text-lg">{item.name}</div>
      </div>
    </div>)
  }

  return (
    <>
      {comp && comp}
    </>
  )
}
export default Result;