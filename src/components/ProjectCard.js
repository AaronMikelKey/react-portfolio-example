import React from 'react'

const ProjectCard = (props) => {
	return (
		<a className={props.number} href={props.link} target="_blank">
			<h2>{props.title}</h2>
			<img src={props.imgLink} />
			<p>{props.description}</p>
		</a>
	)
}

export default ProjectCard
