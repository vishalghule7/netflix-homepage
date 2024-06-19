import React, { useState } from 'react'
import Header from './Header'
import MovieList from './MovieList'

function HeroSection() {
  const [image, setImage] = useState("https://i0.wp.com/dmtalkies.com/wp-content/uploads/2021/03/ezgif-2-5452f5694b1f-compressed.jpg")
  return (
    <div>
        <div className="absolute z-[-1] m-auto ">
          <img src={image} className="h-screen object-cover w-screen" />
        </div>
        <div className= "h-48 absolute w-screen z-[-1] bg-gradient-to-b from-gray-900">

        </div>

        <div className="h-40 bottom-0 mb-[-15px] absolute w-screen z-[-1] bg-gradient-to-t from-gray-900">

        </div>

        <Header/>
        <div className="p-8 m-3"> 
          <p className=" mt-10 text-4xl font-serif font-bold text-white" >
              RAYA AND
          </p>
          <p className=" mt-5 text-4xl font-serif font-bold text-white" >
              THE LAST DRAGON
          </p>
          <p className="text-white  font-medium mt-6" >
            A Disney Original Film
          </p>
          <p className="mt-5 bg-purple-500 hover:scale-105 text-white
           px-10 py-2 text-center font-bold inline-flex rounded-full cursor-pointer transition-all duration-200">
            Play
          </p>
        </div>

        <MovieList/>

    </div>
  )
}

export default HeroSection