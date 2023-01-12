import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Result from "./Result";

const Recommended = ({ playlist, handleCreate }) => {

  return (
    <div className='fixed top-0 left-0 z-30 w-full h-full backdrop-blur bg-black/30 flex justify-center items-center dark:bg-white/30'>
      <div className='max-h-screen flex flex-col rounded-lg dark:bg-[#A4A4A4] bg-white'>
        <div className='px-6 flex flex-col overflow-auto shrink'>
          {playlist.map((item, key) => {
            return <Result item={item} setSelection={()=>{}} selection={[]} key={key}/>
          })}
        </div>
        <button>Hello</button>
        <button onClick={handleCreate}>Create Playlist</button>
      </div>

    </div>
  )
}
export default Recommended;