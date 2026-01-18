import axios from 'axios'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../context/AuthContext'

const Login = () => {
  const { login } = useContext(Auth)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  })

  const { email, password, role } = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await axios.get(
      `http://localhost:3000/users?email=${email}&password=${password}&role=${role}`
    )

    if (result.data[0]) {
      login(result.data[0])
      toast.success('Login successful 🚀')
      navigate('/')
    } else {
      toast.error('Invalid credentials ❌')
    }

    setFormData({ email: '', password: '', role: '' })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-4">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white/10 p-8 backdrop-blur-xl shadow-2xl border border-white/20 transition hover:scale-[1.02]"
      >
       
        <h2 className="mb-2 text-center text-3xl font-extrabold text-white">
          Welcome Back 👋
        </h2>
        <p className="mb-6 text-center text-sm text-gray-300">
          Login to continue
        </p>

   
        <div className="mb-5">
          <label className="mb-1 block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-lg bg-black/30 border border-gray-600 px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 focus:outline-none"
          />
        </div>

      
        <div className="mb-5">
          <label className="mb-1 block text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full rounded-lg bg-black/30 border border-gray-600 px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 focus:outline-none"
          />
        </div>

   
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Select Role
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer text-gray-200">
              <input
                type="radio"
                name="role"
                value="user"
                onChange={handleChange}
                className="h-4 w-4 accent-cyan-400"
              />
              User
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-gray-200">
              <input
                type="radio"
                name="role"
                value="admin"
                onChange={handleChange}
                className="h-4 w-4 accent-purple-400"
              />
              Admin
            </label>
          </div>
        </div>

     
        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 py-2.5 font-semibold text-white shadow-lg transition hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-95"
        >
          Login
        </button>

   
        <p className="mt-5 text-center text-sm text-gray-300">
          Don&apos;t have an account?{' '}
          <span
            onClick={() => navigate('/signup')}
            className="cursor-pointer font-semibold text-cyan-400 hover:underline"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  )
}

export default Login
