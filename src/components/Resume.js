import React from 'react'
import resume from '../assets/AaronMikelKey_WebDeveloper.pdf'
import resumeImage from '../images/resume-image.png'

const Resume = () => {
	return (
		<div>
			<a href={resume} target="_blank">
				<img src={resumeImage}></img>
				<p>Click here to download a PDF version of my resume.</p>
			</a>
		</div>
	)
}

export default Resume
