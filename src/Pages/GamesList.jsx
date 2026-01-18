

import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import Games from './Games'
import { SearchContext } from '../context/SearchContext' 

const GamesList = () => {
  const [allGames, setAllGames] = useState([])
  const { search } = useContext(SearchContext) 

  
  const getGames = async () => {
    try {
      const res = await axios.get('http://localhost:3000/games')
      setAllGames(res.data)
    } catch (error) {
      console.error("Error fetching games:", error)
    }
  }

  const deleteGame = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/games/${id}`)
   
      setAllGames((prev) => prev.filter((game) => game.id !== id))
    } catch (error) {
      console.error("Error deleting game:", error)
    }
  }

  useEffect(() => {
    getGames()
  }, [])

 
const filteredGames = search
    ? allGames.filter((game) =>
        game.game_name.toLowerCase().includes(search.toLowerCase())
      )
    : allGames

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-wrap justify-center gap-8">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <Games key={game.id} {...game} onDelete={deleteGame} />
          ))
        ) : (
         <div className="mt-20 text-center w-full">
  <div className="inline-block p-6 bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-md">
    <p className="text-4xl mb-2 animate-bounce">😕</p>
    <p className="text-2xl font-semibold text-gray-100">No games found</p>
    <p className="mt-2 text-gray-400">
      Try searching with a different keyword or clear your search.
    </p>
  </div>
</div>
        )}
      </div>
    </div>
  )
}

export default GamesList
