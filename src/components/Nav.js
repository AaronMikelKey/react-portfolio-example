import React, { useEffect } from 'react'
import '../assets/css/navbar.css'

const Nav = (props) => {
	//remove active classes from other items
	const removeActive = () => {
		const listItems = document.getElementsByTagName('li')

		console.log(listItems)
		for (const [key, value] of Object.entries(listItems)) {
			console.log('key: ', key, 'value: ', value)
			value.className = ''
		}
	}

	useEffect(() => {
		const listItems = document.getElementsByTagName('li')
		for (const [key, value] of Object.entries(listItems)) {
			if (props.current === value.id) {
				value.className = 'active'
			}
		}
		if (props.current) {
		}
	})

	return (
		<header>
			<span className="header-span">Aaron Key</span>
			<nav className="nav">
				<ul>
					<li
						id="About"
						className="active"
						onClick={() => {
							removeActive(), props.setCurrent('About')
						}}
					>
						<a href="#About">
							<i className="fas fa-home" />
							<span>About</span>
						</a>
					</li>
					<li
						id="Portfolio"
						onClick={() => {
							removeActive(), props.setCurrent('Portfolio')
						}}
					>
						<a href="#Portfolio">
							<i className="fas fa-code-branch" />
							<span>Portfolio</span>
						</a>
					</li>
					<li
						id="Contact"
						onClick={() => {
							removeActive(), props.setCurrent('Contact')
						}}
					>
						<a href="#Contact">
							<i className="fas fa-envelope" />
							<span>Contact</span>
						</a>
					</li>
					<li
						id="Resume"
						onClick={() => {
							removeActive(), props.setCurrent('Resume')
						}}
					>
						<a href="#Resume">
							<i className="fas fa-info-circle" />
							<span>Resume</span>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Nav
