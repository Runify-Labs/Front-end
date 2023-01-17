import React, { useEffect } from "react";
import Result from "./Result";

const Recommended = ({ playlist, setPlaylist, handleCreate, playlistURL, setPlaylistURL }) => {

  var buttons;
  if (playlistURL) {
    buttons = (<div className="flex flex-row justify-center gap-3 my-3">
      <a href={playlistURL} target='_blank'>
        <button className="bg-ash-gray rounded-2xl px-3 py-1 m-2 border-2 border-ebony">Checkout Playlist!</button>
      </a>
      <button className="bg-ash-gray rounded-2xl px-3 py-1 m-2 border-2 border-ebony" onClick={() => {setPlaylistURL(); setPlaylist()}}>Create Another</button>
    </div>)
  } else {
    buttons = (<div className="flex flex-row justify-center gap-3 my-3">
        <button className='bg-ash-gray rounded-2xl px-3 py-1 border-2 border-ebony' onClick={handleCreate}>Create Playlist</button>
        <button className='bg-ash-gray rounded-2xl px-3 py-1 border-2 border-ebony' onClick={() => setPlaylist()}>Go back</button>
      </div>)
  }

  return (
    <div className='fixed top-0 left-0 z-30 w-full h-full backdrop-blur bg-black/30 flex justify-center items-center dark:bg-white/30'>
      <div className='max-h-[90vh] flex flex-col rounded-lg bg-tan bg-white'>
        <div className="text-2xl font-bold self-center mt-3">This could be yours!</div>
        <div className='p-2 mx-6 my-2 flex flex-col overflow-auto shrink border border-[2px] border-ebony rounded-lg scrollbar-hide'>
          {playlist.map((item, key) => {
            return <Result item={item} setSelection={()=>{}} selection={[]} key={key}/>
          })}
        </div>
        {buttons}
      </div>

    </div>
  )
}
export default Recommended;