import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Tunes from './components/Tunes'
import About from './components/About'
import Home from './components/Home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <App />
			},
			{
				path: '/home',
				element: <Home />
			},
			{
				path: '/tunes',
				element: <Tunes />
			},
			{
				path: '/about',
				element: <About />
			}
		]
	}
])

// @ts-ignore
createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
)
