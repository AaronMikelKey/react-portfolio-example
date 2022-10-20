import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

const App = () => {
	const [currentTab, setCurrentTab] = useState('About')
	return (
		<div className="App">
			<Nav current={currentTab} setCurrent={setCurrentTab} />
			<main>
				<span>test</span>
			</main>
			<footer></footer>
		</div>
	)
}

export default App
