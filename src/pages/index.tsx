import React from 'react'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Footer } from '../components/Footer'

const Home = () => {
	return (
		<div className='w-full'>
			<Hero />
			<Footer />
		</div>

	)
}

export default Home