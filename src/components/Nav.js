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
<<<<<<< HEAD
							removeActive()
							props.setCurrent('About')
=======
							removeActive(), props.setCurrent('About')
>>>>>>> main
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
<<<<<<< HEAD
							removeActive()
							props.setCurrent('Portfolio')
=======
							removeActive(), props.setCurrent('Portfolio')
>>>>>>> main
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
<<<<<<< HEAD
							removeActive()
							props.setCurrent('Contact')
=======
							removeActive(), props.setCurrent('Contact')
>>>>>>> main
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
<<<<<<< HEAD
							removeActive()
							props.setCurrent('Resume')
=======
							removeActive(), props.setCurrent('Resume')
>>>>>>> main
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
