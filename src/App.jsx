import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Pages/Layout'

import SignUp from './Pages/SignUp'

import Login from './Pages/Login'
import Cart from './Pages/Cart'
import ProtectedRoutes from './Routes/ProtectedRoutes'
import UpdateGame from './Pages/UpdateGame'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Privacy from './Pages/Privacy'
import Checkout from './Pages/Checkout'
import Payment from './Pages/Payment'

import GamesList from './Pages/GamesList'
import AddGame from './Pages/AddGame'

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/games',
          element: (
            <ProtectedRoutes>
              <GamesList/>
            </ProtectedRoutes>
          )
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/cart',
          element: (
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          )
        },
        {
          path: '/Checkout', 
          element: (
            <ProtectedRoutes>
              <Checkout />
            </ProtectedRoutes>
          )
        },
        {
          path: '/Payment', 
          element: (
            <ProtectedRoutes>
              <Payment />
            </ProtectedRoutes>
          )
        },
        {
          path: '/update/:id',
          element: <UpdateGame />
        },
        {
          path: '/add',
          element: <AddGame />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/privacy',
          element: <Privacy />
        }
      ]
    }
  ])

  return <RouterProvider router={myRouter} />
}

export default App














