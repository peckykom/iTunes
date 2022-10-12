import './Home.scss'

import logo from '../assets/logo.svg'
import React, { FC, useState } from 'react'

interface HomeProps {

}

const Home: FC<HomeProps> = () =>{
	const [title] = useState('React, whee!!')
	return (
		<div className="home">
			<img className="logo" src={logo} alt="react logo" />

			<h1>{title}</h1>

			<p>
				Hot singles in your area. <br />
				Hotter react in your&nbsp;
				<a
					href="https://reactjs.org/docs"
					target="_blank"
					rel="noopener noreferrer"
				>
					documentation
				</a>
				.
			</p>
		</div>
	)
}

export default Home