import React, { useEffect } from "react";

const Select = ({ item, index, setSelection, selection }) => {

  var comp;

  const removeSelection = () => {
    const temp = [...selection]
    if(temp.length === 1)
      setSelection([])
    else {
      temp.splice(index,1)
      setSelection(temp)
    }
  }

  if(item.type === 'track') {
    comp = (<button className='flex flex-row items-center gap-1 border border-[2px] border-ebony bg-ash-gray rounded-3xl px-3 py-1' onClick={()=>removeSelection()}>
      <img className='h-6' src={item.album.images[2].url}/>
      <div className="text-xs">{item.name}</div>
    </button>)
  } else if (item.type === 'artist') {
    comp = (<button className='flex flex-row items-center gap-1 border border-[2px] border-ebony bg-ash-gray rounded-3xl px-3 py-1' onClick={()=>removeSelection()}>
    <img className='h-6 rounded-full' src={item.images[2].url}/>
    <div className="text-xs">{item.name}</div>
  </button>)
  }

  return (
    <>
      {comp && comp}
    </>
  )
}
export default Select;

//