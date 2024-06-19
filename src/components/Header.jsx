import React from 'react'

function Header() {
  return (
        <div className=" flex  items-center justify-between text-2xl text-cyan-100 font-mono mx-3  ">
        Logo
        <ul className= "flex  flex-row gap-7">
            <li className="hover:scale-108 cursor-pointer transition-all hover:bg-red-700 rounded px-1 py-1 hover:font-bold ">Movies</li>
            <li className="hover:scale-108 cursor-pointer transition-all hover:bg-red-700 rounded px-1 py-1 hover:font-bold ">Series</li>
            <li className="hover:scale-108 cursor-pointer transition-all hover:bg-red-700 rounded px-1 py-1 hover:font-bold ">Kids</li>
        </ul>
        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" 
          className= "w-8 rounded-full invisible md:visible lg:visible  " />
    </div>
    
  )
}

export default Header