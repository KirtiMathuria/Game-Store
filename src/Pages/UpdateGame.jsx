import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FaGamepad } from 'react-icons/fa'

const UpdateGame = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [gameData, setGameData] = useState({
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


  const getGame = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3000/games/${id}`
      )
      setGameData(result.data)
    } catch (error) {
      toast.error('Failed to load game data')
    }
  }

  useEffect(() => {
    getGame()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setGameData({ ...gameData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if ( game_name && game_image && price && genre && platform && rating && developer) 
      {
      try {
        await axios.put(
          `http://localhost:3000/games/${id}`,
          {
            ...gameData,
            price: Number(price),
            rating: Number(rating)
          }
        )

        toast.success('Game Updated Successfully 🎮')
        navigate('/games') 
      } catch (error) {
        toast.error('Update failed!')
      }
    } else {
      toast.error('Please fill all fields!')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black px-4">
      <div className="w-full max-w-lg bg-gray-800 text-white rounded-3xl shadow-2xl p-8 border border-purple-600">

        <div className="flex justify-center mb-4">
          <div className="bg-purple-600 p-4 rounded-full">
            <FaGamepad className="text-4xl text-white" />
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
          Update Game
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input   className="w-full px-4 py-3 bg-gray-700 rounded-xl" 
          name="game_name" 
          value={game_name}
           onChange={handleChange} 
           placeholder="🎮 Game Name"
           />

          <input   className="w-full px-4 py-3 bg-gray-700 rounded-xl" 
           name="game_image"
           value={game_image} 
           onChange={handleChange} 
           placeholder="🖼 Game Image URL" 
           
           />
          <input    className="w-full px-4 py-3 bg-gray-700 rounded-xl" 
          name="price" 
          type="number" 
          value={price} 
          onChange={handleChange} 
          placeholder="💰 Price" 
       
          />
          <input className="w-full px-4 py-3 bg-gray-700 rounded-xl"
          name="genre" 
          value={genre} 
          onChange={handleChange} 
          placeholder="🎯 Genre" 
           
          />

          <input className="w-full px-4 py-3 bg-gray-700 rounded-xl"
          name="platform" 
          value={platform} 
          onChange={handleChange} 
          placeholder="🕹 Platform" 
           
          />
          <input   className="w-full px-4 py-3 bg-gray-700 rounded-xl" 
          name="rating" 
          type="number" 
          step="0.1" 
          value={rating} 
          onChange={handleChange} 
          placeholder="⭐ Rating" 
        
          />
          <input className="w-full px-4 py-3 bg-gray-700 rounded-xl" 
          name="developer" 
          value={developer} 
          onChange={handleChange} 
          placeholder="🏢 Developer" 
 
          />

          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            Update Game
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateGame
