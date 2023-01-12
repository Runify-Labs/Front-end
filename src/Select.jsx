import React, { useEffect } from "react";

const Select = ({ item, index, setSelection, selection }) => {

  var comp;

  const removeSelection = () => {
    const temp = [...selection]
    if(temp.length === 1)
      setSelection([])
    else
      setSelection(temp.splice(index,1))
  }

  if(item.type === 'track') {
    comp = (<div onClick={()=>removeSelection()}>
      <img src={item.album.images[2].url} height='10'/>
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
export default Select;

//