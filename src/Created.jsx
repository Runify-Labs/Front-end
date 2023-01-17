import React from "react";
import Result from "./Result";

const Recommended = ({ playlistURL }) => {

  return (
    <div className='fixed top-0 left-0 z-30 w-full h-full backdrop-blur bg-black/30 flex justify-center items-center dark:bg-white/30'>
      <div className='rounded-lg dark:bg-tan bg-white border border-4 border-ebony'>
        <a href={playlistURL} target='_blank'>
            <button className="bg-ash-gray rounded-2xl px-3 py-1 m-2 border-2 border-ebony">Checkout Playlist!</button>
        </a>
        <button className="bg-ash-gray rounded-2xl px-3 py-1 m-2 border-2 border-ebony">Create Another</button>
      </div>

    </div>
  )
}
export default Recommended;