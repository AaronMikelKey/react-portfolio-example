import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/brands'

const App = () => {
	const [currentTab, setCurrentTab] = useState('About')
	let currentPage = <About />
	switch (currentTab) {
		case 'About':
			currentPage = <About />
			break
		case 'Contact':
			currentPage = <Contact />
			break
		case 'Portfolio':
			currentPage = <Portfolio />
			break
		case 'Resume':
			currentPage = <Resume />
			break
		default:
			currentPage = <About />
			break
	}
	return (
		<div className="App">
			<Nav current={currentTab} setCurrent={setCurrentTab} />
			<main>{currentPage}</main>
			<Footer />
		</div>
	)
}

export default App
