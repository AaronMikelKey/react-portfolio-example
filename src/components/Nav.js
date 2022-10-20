import React from 'react'

const Nav = () => {
	return (
		<nav className="nav darkmode">
			<ul>
				<li className="active">
					<a href="#About">
						<i className="fas fa-home" />
						<span>About</span>
					</a>
				</li>
				<li>
					<a href="#Portfolio">
						<i className="fas fa-code-branch" />
						<span>Portfolio</span>
					</a>
				</li>
				<li>
					<a href="#Contact">
						<i className="fas fa-envelope" />
						<span>Contact</span>
					</a>
				</li>
				<li>
					<a href="#Resume">
						<i className="fas fa-info-circle" />
						<span>Resume</span>
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
