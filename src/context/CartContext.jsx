
import { createContext, useContext, useEffect, useState } from 'react'
import { Auth } from './AuthContext'
import axios from 'axios'
import toast from 'react-hot-toast'

export const CartData = createContext()

const CartContext = ({ children }) => {
  const { user } = useContext(Auth)
  const [cart, setCart] = useState([])


  useEffect(() => {
    if (user?.id) {
      fetchCart()
    } else {
      setCart([]) 
    }
  }, [user])

  const fetchCart = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/cart?userId=${user.id}`
      )
      setCart(res.data)
    } catch (err) {
      console.error(err)
      toast.error('Failed to load cart')
    }
  }

  const addToCart = async (game) => {
    if (!user) {
      toast.error('Please login to add games')
      return
    }
    

    const exists = cart.find(item => item.id === game.id)

    if (exists) {
      toast.error('Game already in cart')
      return
    }

    const cartObject = {
      ...game,
      userId: user.id
    }

    try {
      const res = await axios.post(
        'http://localhost:3000/cart',
        cartObject
      )

      setCart(prev => [...prev, res.data])
      toast.success('Game added to cart 🎮')
    } catch (err) {
      console.error(err)
      toast.error('Failed to add game')
    }
  }


  const removeFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`)
      setCart(prev => prev.filter(item => item.id !== id))
      toast.success('Removed from cart')
    } catch (err) {
      console.error(err)
      toast.error('Failed to remove item')
    }
  }

  return (
    <CartData.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartData.Provider>
  )
}

export default CartContext
