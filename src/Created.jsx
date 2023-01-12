import React from "react";
import Result from "./Result";

const Recommended = ({ playlistURL }) => {

  return (
    <div className='fixed top-0 left-0 z-30 w-full h-full backdrop-blur bg-black/30 flex justify-center items-center dark:bg-white/30'>
      <div className='rounded-lg dark:bg-[#A4A4A4] bg-white'>
        <a href={playlistURL} target='_blank'>
            <button>Checkout Playlist!</button>
        </a>
        <button>Create Another</button>
      </div>

    </div>
  )
}
export default Recommended;