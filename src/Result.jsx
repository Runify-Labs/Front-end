import React, { useEffect } from "react";

const Result = ({ item, setSelection, selection }) => {

  var comp;

  if(item.type === 'track') {
    comp = (<div onClick={() => setSelection([...selection, item])}>
      <img src={item.album.images[2].url}/>
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