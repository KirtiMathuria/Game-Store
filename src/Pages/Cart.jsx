import React, { useContext, useEffect, useState } from 'react'
import { Auth } from '../context/AuthContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { user } = useContext(Auth)
  const [allCart, setAllCart] = useState([])
  const navigate = useNavigate()

 
  const getCart = async () => {
    if (!user) return
    const result = await axios.get(
      `http://localhost:3000/cart?userId=${user.id}`
    )
    setAllCart(result.data)
  }

  const removeFromCart = async (cartId) => {
    await axios.delete(`http://localhost:3000/cart/${cartId}`)
    setAllCart(prev => prev.filter(item => item.id !== cartId))
    toast.success('Removed from cart')
  }

 
  const totalAmount = allCart.reduce( (total, item) =>
  total + Number(item.price)
  ,0 )

  useEffect(() => {
    getCart()
  }, [user])

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold text-black-100">
        🛒 My Cart
      </h1>

      {allCart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty</p>
      ) : (
        <>
       
          <div className="flex flex-wrap gap-4 justify-center">
            {allCart.map(item => (
              <div
                key={item.id}
                className="group w-[280px] rounded-3xl
                           bg-gradient-to-br from-gray-900 via-gray-800 to-black
                           border border-purple-600/40
                           shadow-xl transition-all duration-300
                           hover:-translate-y-2 hover:shadow-purple-700/40"
              >
              
                <div className="relative h-44 overflow-hidden rounded-t-3xl">
                  <img
                    src={item.game_image}
                    alt={item.game_name}
                    className="h-full w-full object-cover
                               transition-transform duration-500
                               group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                 
                  <span className="absolute top-2 right-2 rounded-lg
                                   bg-black/70 px-2 py-1 text-xs font-semibold text-yellow-400">
                    ⭐ {item.rating || '—'}
                  </span>
                </div>

              
                <div className="flex flex-1 flex-col p-4 text-gray-200">
                  <h3 className="mb-1 line-clamp-1 text-lg font-bold text-white">
                    {item.game_name}
                  </h3>

                  <p className="text-sm text-gray-400">
                    Developer: <span className="text-gray-200">{item.developer}</span>
                  </p>

                  <p className="text-sm text-gray-400">
                    Platform: <span className="text-gray-200">{item.platform}</span>
                  </p>

                
                  <div className="mt-2 text-xl font-bold text-indigo-400">
                    {item.price === 0 ? 'Free' : `₹${item.price}`}
                  </div>

           
                  <div className="mt-auto pt-4 flex gap-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex-1 rounded-xl border border-red-500
                                 py-2 text-sm font-semibold text-red-400
                                 transition hover:bg-red-600 hover:text-white"
                    >
                      Remove
                    </button>

                    <button
                      onClick={() => navigate('/checkout')}
                      className="flex-1 rounded-xl bg-gradient-to-r
                                 from-purple-600 to-indigo-600
                                 py-2 text-sm font-semibold text-white
                                 transition hover:scale-105"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

      
          <div className="mt-8 flex justify-end text-xl font-bold text-black-200">
            Total: <span className="text-indigo-400 ml-2">₹{totalAmount}</span>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
