import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

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
	}
	return (
		<div className="App">
			<Nav current={currentTab} setCurrent={setCurrentTab} />
			<main>{currentPage}</main>
			<footer></footer>
		</div>
	)
}

export default App
