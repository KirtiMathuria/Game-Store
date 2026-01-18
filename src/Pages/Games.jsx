import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Auth } from '../context/AuthContext'
import { CartData } from '../context/CartContext'

const Games = (props) => {
  const {
    game_name,
    game_image,
    price,
    genre,
    platform,
    rating,
    developer,
    id,
    onDelete
  } = props

  const { user } = useContext(Auth)
  const { addToCart } = useContext(CartData)
  const navigate = useNavigate()

  const handleBuyNow = async () => {
    if (!user) {
      navigate('/login')
      return
    }
    await addToCart(props)
    navigate('/cart')
  }

  return (
    <div
      className="group w-[280px] overflow-hidden rounded-2xl
                 bg-gray-800/90 backdrop-blur-sm
                 border border-gray-700
                 shadow-md transition-all duration-300
                 hover:-translate-y-2 hover:shadow-2xl
                 hover:ring-2 hover:ring-indigo-400/50"
    >
    
      <div className="relative h-44 overflow-hidden rounded-t-2xl">
        <img
          src={game_image}
          alt={game_name}
          className="h-full w-full object-cover
                     transition-transform duration-500
                     group-hover:scale-110"
        />
     
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      
        <span
          className="absolute top-2 right-2 rounded-lg
                     bg-black/60 px-2 py-1 text-xs font-semibold text-yellow-400"
        >
          ⭐ {rating}
        </span>
      </div>

   
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-lg font-bold text-gray-100 line-clamp-1">
          {game_name}
        </h3>

        <p className="text-xs text-gray-300">
          Developer: <span className="font-medium text-gray-200">{developer}</span>
        </p>
        <p className="text-xs text-gray-300">
          Genre: <span className="font-medium text-gray-200">{genre}</span>
        </p>
        <p className="text-xs text-gray-300">
          Platform: <span className="font-medium text-gray-200">{platform}</span>
        </p>

     
        <div className="mt-3 text-lg font-bold text-indigo-400">
          {price === 0 ? 'Free' : `₹${price}`}
        </div>

  
        <div className="mt-4 flex gap-2">
          {user?.role === 'admin' ? (
            <>
              <NavLink
                to={`/update/${id}`}
                className="flex-1 rounded-xl border border-blue-500
                           py-2 text-sm font-semibold text-blue-400
                           text-center transition-all duration-300
                           hover:bg-blue-500 hover:text-white hover:shadow-md"
              >
                Update
              </NavLink>

              <button
                onClick={() => onDelete(id)}
                className="flex-1 rounded-xl border border-red-500
                           py-2 text-sm font-semibold text-red-400
                           transition-all duration-300
                           hover:bg-red-500 hover:text-white hover:shadow-md"
              >
                Delete
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleBuyNow}
                className="flex-1 rounded-xl
                           bg-gradient-to-r from-purple-600 to-indigo-600
                           py-2 text-sm font-semibold text-white
                           transition-all duration-300
                           hover:scale-105 hover:shadow-lg"
              >
                Buy Now
              </button>

              <button
                onClick={() => addToCart(props)}
                className="flex-1 rounded-xl
                           bg-gradient-to-r from-green-500 to-emerald-600
                           py-2 text-sm font-semibold text-white
                           transition-all duration-300
                           hover:scale-105 hover:shadow-lg"
              >
                Add to Cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Games
