import React from 'react'
import '../assets/css/footer.css'

const Footer = () => {
	return (
		<footer>
			<div className="contact-grid">
				<a
					href="https://github.com/AaronMikelKey"
					target="_blank"
					className="a1"
				>
					<i className="fab fa-github" aria-hidden="true"></i>
					<span> Github</span>
				</a>
				<a
					href="https://linkedin.com/in/AaronKey"
					target="_blank"
					className="a2"
				>
					<i className="fab fa-linkedin" aria-hidden="true"></i>
					<span> LinkedIn</span>
				</a>
				<a href="https://AaronKey.com" target="_blank" className="a3">
					<i class="fa fa-solid fa-globe"></i>
					<span> Website</span>
				</a>
			</div>
		</footer>
	)
}

export default Footer
