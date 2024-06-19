import React from 'react'

function MovieList() {
    const videoList = [
        {
          id: 1,
          image:
            "https://tilt.goombastomp.com/wp-content/uploads/2021/12/Jungle-Cruise-poster-4538533-819x1024.jpg",
        },
        {
          id: 2,
          image:
            "https://i0.wp.com/movienooz.com/wp-content/uploads/2019/06/Spider-Man-Far-from-Home-Teaser-Poster-2.jpg?ssl=1",
        },
        {
          id: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        },
        {
          id: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
        },
        {
          id: 5,
          image:
            "https://tilt.goombastomp.com/wp-content/uploads/2021/12/Jungle-Cruise-poster-4538533-819x1024.jpg",
        },
        {
          id: 6,
          image:
            "https://i0.wp.com/movienooz.com/wp-content/uploads/2019/06/Spider-Man-Far-from-Home-Teaser-Poster-2.jpg?ssl=1",
        },
        {
          id: 7,
          image:
            "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        },
        {
          id: 8,
          image:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
        },
      ];
  return (
    <div className="mt-8">
        <p className=" text-white font-bold font-serif text-2xl
         px-10 py-1">
            New Release
        </p>
        <div className="w-full py-8 px-8 overflow-x-scroll
           whitespace-nowrap scroll-smooth scrollbar-hide ">
            {
                videoList.map((items)=> (
                    <div className="inline-block m-2 md:m3">
                        <img src={items.image} 
                        className=" w-[150px] h-[200px]
                        transition-all ease-out 
                        duration-500 rounded-2xl object-cover 
                        md:w-[180px] md:h-[240px] cursor-pointer
                        hover:scale-110
                        " />
                     </div>
                ))
            }
        </div>
    </div>

  )
}

export default MovieList