import "./Navigation.scss"

import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface NavigationProps {

}

const Navigation: FC<NavigationProps> = () =>{
	return (
		<nav className="navigation">
			<NavLink to='/' end>Home</NavLink>
			<NavLink to='/tunes'>Tunes</NavLink>
			<NavLink to='/about'>About</NavLink>
		</nav>
	)
}

export default Navigation