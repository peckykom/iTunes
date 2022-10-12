import './App.scss'

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Tunes from './components/Tunes'
import About from './components/About'

function App() {
	return (
		<div className='App App-header'>
			<header>
				<Navigation/>
			</header>
			<main className='content'>
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/about' element={<About/>} />
					<Route path='/tunes' element={<Tunes/>} />
				</Routes>
			</main>
		</div>
	)
}

export default App
