import React from 'react'
import { Button } from '../components/Button'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact'
import { UpSite } from '../components/UpSite'

const Home = () => {
	return (
		<>
		<Nav />
		<Hero />
		{/* <About /> */}
		<Contact />
		<Footer />

		</>
	)
}

export default Home