import React, { useContext } from 'react'
import { CartData } from '../context/CartContext'
import { Auth } from '../context/AuthContext'
import toast from 'react-hot-toast'

const Payment = () => {
  const { cart } = useContext(CartData)
  const { user } = useContext(Auth)

  const totalAmount = cart.reduce(  (total, item) =>
  total + Number(item.price)
  ,0)
    
  

  const handlePayment = () => {
    const options = {
      key: 'your razorpay id',
      amount: totalAmount * 100,
      currency: 'INR',
      name: 'Game Loot',
      description: 'Game Purchase',
     
      handler: function (response) {
        toast.success('Payment Successful 🎉')
        console.log(response)
      },
      prefill: {
        name: user?.name,
        email: user?.email
      },
      theme: {
        color: '#0ea5e9'
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-sky-900 
                    flex items-center justify-center px-4">

    
      <div className="w-full max-w-md rounded-3xl 
                      bg-white/10 backdrop-blur-xl
                      p-8 shadow-2xl
                      transition hover:shadow-sky-500/30">

 
        <h2 className="mb-6 text-center text-3xl font-extrabold text-sky-300">
          Secure Payment 🔐
        </h2>

      
        <div className="mb-6 rounded-xl bg-white/5 p-4 text-white">
          <p className="text-sm text-gray-300">Paying as</p>
          <p className="font-semibold">{user?.name}</p>
          <p className="text-sm text-gray-400">{user?.email}</p>
        </div>

    
        <div className="mb-8 flex items-center justify-between rounded-xl bg-white/5 p-4 text-white">
          <span className="text-lg font-medium">Total Amount</span>
          <span className="text-2xl font-bold text-sky-400">
            ₹{totalAmount}
          </span>
        </div>

        <button
          onClick={handlePayment}
          className="w-full rounded-2xl
                     bg-gradient-to-r from-blue-500 to-sky-500
                     py-4 text-xl font-bold text-white
                     shadow-lg transition
                     hover:scale-105 hover:shadow-sky-500/50
                     active:scale-95"
        >
          Pay with Razorpay 💳
        </button>

    
        <p className="mt-6 text-center text-xs text-gray-400">
          100% secure payments powered by Razorpay
        </p>
      </div>
    </div>
  )
}

export default Payment
