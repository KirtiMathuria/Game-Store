import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as randomId } from 'uuid'

const SignPage = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    pid: randomId()
  })

  const { username, email, password, confirmPassword } = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

   if (!username || !email || !password || !confirmPassword) {
    alert("All fields required ❗")
    return
  }
    {
      if (password !== confirmPassword) {
        alert('Passwords do not match ❌')
        return
      }

      const result = await axios.post(
        'http://localhost:3000/users',
        formData
      )

      if (result.status === 201) {
        navigate('/login')
      }
    }

    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      pid: randomId()
    })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-4">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white/10 p-8 backdrop-blur-xl shadow-2xl border border-white/20 transition hover:scale-[1.02]"
      >
 
        <h2 className="mb-2 text-center text-3xl font-extrabold text-white">
          Create Account ✨
        </h2>
        <p className="mb-6 text-center text-sm text-gray-300">
          Sign up to get started
        </p>

  
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-300">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Enter username"
            className="w-full rounded-lg bg-black/30 border border-gray-600 px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 focus:outline-none"
          />
        </div>

      
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="you@gmail.com"
            className="w-full rounded-lg bg-black/30 border border-gray-600 px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 focus:outline-none"
          />
        </div>

      
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full rounded-lg bg-black/30 border border-gray-600 px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 focus:outline-none"
          />
        </div>

    
        <div className="mb-6">
          <label className="mb-1 block text-sm font-medium text-gray-300">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full rounded-lg bg-black/30 border border-gray-600 px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 focus:outline-none"
          />
        </div>

       
        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 py-2.5 font-semibold text-white shadow-lg transition hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-95"
        >
          Sign Up
        </button>

     
        <p className="mt-5 text-center text-sm text-gray-300">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="cursor-pointer font-semibold text-cyan-400 hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  )
}

export default SignPage
