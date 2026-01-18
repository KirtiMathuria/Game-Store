import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { v4 as randomId } from 'uuid'
import { FaGamepad } from 'react-icons/fa'

const AddGame = () => {
  const navigate = useNavigate()

  const [gameData, setGameData] = useState({
    id: randomId(),
    game_name: '',
    game_image: '',
    price: '',
    genre: '',
    platform: '',
    rating: '',
    developer: ''
  })

  const {
    game_name,
    game_image,
    price,
    genre,
    platform,
    rating,
    developer
  } = gameData

  const handleChange = (e) => {
    const { name, value } = e.target
    setGameData({ ...gameData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (game_image && game_name) {
      const response = await axios.post(
        'http://localhost:3000/games',
        {
          ...gameData,
          price: Number(price),
          rating: Number(rating)
        }
      )

      if (response.status === 201) {
        toast.success('Game Added Successfully 🎮')
       navigate('/games')
      }

      setGameData({
        id: randomId(),
        game_name: '',
        game_image: '',
        price: '',
        genre: '',
        platform: '',
        rating: '',
        developer: ''
      })
    } else {
      toast.error('Please provide game name and image')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-indigo-950 px-4">
  
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-2xl border border-indigo-500/30 rounded-2xl shadow-xl p-4">

        
        <div className="flex justify-center mb-2">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-full shadow">
            <FaGamepad className="text-2xl text-white" />
          </div>
        </div>

        <h2 className="text-xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          Add New Game
        </h2>

        <p className="text-gray-400 text-center mb-3 text-xs">
          Enter game details
        </p>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {[
            { label: 'Game Name', name: 'game_name', value: game_name, placeholder: 'Enter game name' },
            { label: 'Game Image URL', name: 'game_image', value: game_image, placeholder: 'https://example.com/image' },
            { label: 'Price (₹)', name: 'price', value: price, placeholder: '2999 or 0 for Free' },
            { label: 'Genre', name: 'genre', value: genre, placeholder: 'Action, RPG' },
            { label: 'Platform', name: 'platform', value: platform, placeholder: 'PC, PS5' },
            { label: 'Rating', name: 'rating', value: rating, placeholder: '4.5' },
            { label: 'Developer', name: 'developer', value: developer, placeholder: 'Studio name' }
          ].map((field, index) => (
            <div key={index}>
              <label className="block text-[11px] font-medium text-indigo-300 mb-0.5">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                value={field.value}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full px-3 py-1.5 text-sm rounded-lg bg-black/40 text-white placeholder-gray-400 border border-indigo-500/30 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 outline-none transition"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full mt-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg text-sm font-semibold shadow hover:scale-105 active:scale-95 transition"
          >
            🎯 Add Game
           
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddGame
