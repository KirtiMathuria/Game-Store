import React from 'react'
import banner from '../assets/banner1.jpg'
import { useNavigate } from 'react-router-dom'

const MidBanner = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-slate-950 md:py-24">
      <div
        className="relative mx-auto h-[520px] max-w-7xl 
                   overflow-hidden md:h-[620px] md:rounded-3xl
                   bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: 'fixed'
        }}
      >
       
        <div className="absolute inset-0 bg-gradient-to-r 
                        from-black/80 via-black/60 to-black/80
                        md:rounded-3xl flex items-center justify-center">

     
          <div className="px-6 text-center text-white">
            <h1
              className="mb-5 text-4xl font-extrabold tracking-wide 
                         md:text-5xl lg:text-6xl
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            >
              The Future of Gaming Starts Here
            </h1>

            <p className="mx-auto mb-8 max-w-2xl 
                          text-lg md:text-xl text-gray-300">
              Discover AAA titles, indie hits, and exclusive deals.
              Instant downloads. No limits. Just pure gaming.
            </p>

         
            <button
              onClick={() => navigate('/games')}
              className="rounded-2xl bg-gradient-to-r 
                         from-purple-600 to-pink-600
                         px-10 py-4 text-lg font-bold text-white
                         shadow-lg shadow-pink-600/30
                         transition hover:scale-105 hover:shadow-pink-600/60
                         active:scale-95"
            >
              🚀 Explore Store
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner
