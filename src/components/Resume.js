import React from 'react'
import resume from '../assets/AaronMikelKey_WebDeveloper.pdf'
import resumeImage from '../images/resume-image.png'
import '../assets/css/resume.css'

const Resume = () => {
	return (
		<div>
			<a href={resume} target="_blank" className="resume-image">
				<img src={resumeImage}></img>
				<p>Click here to download a PDF version of my resume.</p>
			</a>

			<h2>Front End Proficiencies</h2>
			<ul className="prof-list">
				<li>HTML5</li>
				<li>CSS (SASS/LESS, Bulma.io, Tailwind, Bootstrap)</li>
				<li>ES6</li>
				<li>React</li>
				<li>jQuery</li>
				<li>Pug, Handlebars</li>
			</ul>
			<h2>Back End Proficiencies</h2>
			<ul className="prof-list">
				<li>APIs</li>
				<li>NodeJS</li>
				<li>SQL (mysql), Sequalize</li>
				<li>React</li>
				<li>jQuery</li>
				<li>Pug, Handlebars</li>
			</ul>
		</div>
	)
}

export default Resume
