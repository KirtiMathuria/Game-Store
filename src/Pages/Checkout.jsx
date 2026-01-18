import React, { useContext, useEffect, useState } from 'react'
import { Auth } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const { user } = useContext(Auth)
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const getCartItems = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/cart?userId=${user?.id}`
      )
      setCartItems(res.data)
    } catch (error) {
      console.error('Failed to load cart')
    } finally {
      setLoading(false)
    }
  }

  const totalAmount = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  )

  useEffect(() => {
    if (user?.id) {
      getCartItems()
    }
  }, [user])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 px-6 py-12">
      <div className="mx-auto max-w-4xl">

      
        <h1 className="mb-10 text-center text-4xl font-extrabold text-emerald-300">
          Secure Checkout 🔒
        </h1>

      
        <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-8 shadow-xl transition hover:shadow-emerald-500/30">

      
          {loading && (
            <p className="text-center text-lg text-gray-300 animate-pulse">
              Loading your cart...
            </p>
          )}

         
          {!loading && cartItems.length === 0 && (
            <p className="text-center text-lg text-gray-300">
              Your cart is empty 😔
            </p>
          )}

       
          {!loading && cartItems.length > 0 && (
            <>
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl
                               bg-white/5 px-5 py-4 text-white
                               transition hover:bg-white/10 hover:scale-[1.02]"
                  >
                    <span className="font-medium">
                      🎮 {item.game_name}
                    </span>
                    <span className="font-semibold text-emerald-400">
                      ₹{item.price}
                    </span>
                  </div>
                ))}
              </div>

           
              <div className="my-6 h-px bg-white/20" />

        
              <div className="flex justify-between text-2xl font-bold text-white">
                <span>Total</span>
                <span className="text-emerald-400">
                  ₹{totalAmount}
                </span>
              </div>

              <button
                onClick={() => navigate('/payment')}
                className="mt-8 w-full rounded-2xl
                           bg-gradient-to-r from-teal-500 to-cyan-500
                           py-4 text-xl font-bold text-white
                           shadow-lg transition
                           hover:scale-105 hover:shadow-emerald-500/50
                           active:scale-95"
              >
                Pay Now 💳
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Checkout
