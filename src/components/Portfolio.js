import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../assets/projects'
import '../assets/css/portfolio.css'

const Portfolio = () => {
	return (
		<div className="container-p">
			<div className="header-p">
				<h1>Projects</h1>
				<p>Here's a few of the projects I've made.</p>
			</div>

			{projects.map((data) => {
				return <ProjectCard key={data.number[1]} {...data} />
			})}
		</div>
	)
}

export default Portfolio
