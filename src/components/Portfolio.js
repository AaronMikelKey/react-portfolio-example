import React from 'react'
import jandkscreenshot from '../images/JandkScreenshot.png'
import twitchSubsScreenshot from '../images/twitchSubsScreenshot.png'
import teamBuilder from '../images/team-builder.png'
import '../assets/css/portfolio.css'

const Portfolio = () => {
	return (
		<div className="container-p">
			<div className="header-p">
				<h1>Projects</h1>
				<p>Here's a few of the projects I've made.</p>
			</div>
			<a href="https://jandkpaintsandpix.com" target="_blank" className="p1">
				<h2>J&amp;K Paints and Pixels</h2>
				<img src={jandkscreenshot}></img>
				<p className="description">
					A react website I made for a local business. The portfolio page uses
					the facebook graph API to pull the most recent pictures from their
					uploads and displays them in columns, but ordered left to right.
				</p>
			</a>
			<a
				href="https://twitch-streamer-check.herokuapp.com"
				target="_blank"
				className="p2"
			>
				<h2>Twitch Follows Checker</h2>
				<img src={twitchSubsScreenshot}></img>
				<p className="description">
					An app I made to showcase intergration with the Twitch.tv API. This
					app uses OAUTH2 to sign into twitch and pulls the list of streamers
					you follow, then displays their stream info if they are currently
					streaming. Since it is hosted on heroku's hobby dynos it may take a
					few seconds to start when you visit.
				</p>
			</a>
			<a
				href="https://github.com/AaronMikelKey/team-builder"
				target="_blank"
				className="p3"
			>
				<h2>CLI Team Builder</h2>
				<img src={teamBuilder}></img>
				<p className="description">
					This is a CLI app that will allow you to build a team consisting of a
					manager, and as many engineers and/or interns as you would like. You
					can then input their information, and the app will create a static
					HTML page that displays the team.
				</p>
			</a>
			<div className="p4">
				<a href="https://d-cubed.herokuapp.com/" target="_blank">
					<h2>Lawn Care Scheduling App</h2>
					<img src="https://raw.githubusercontent.com/AaronMikelKey/d-cubed-lawncare/main/public/Screenshot1.png"></img>
					<p className="description">
						This was a group project for a gentleman who wanted to create a
						website for his growing business.
					</p>
				</a>
				<a
					href="https://github.com/AaronMikelKey/d-cubed-lawncare"
					className="link"
				>
					You can view the repo and contributors here.
				</a>
			</div>
			<a
				href="https://github.com/AaronMikelKey/pwa-text-editor"
				target="_blank"
				className="p5"
			>
				<h2>PWA Text Editor</h2>
				<img src="https://raw.githubusercontent.com/AaronMikelKey/pwa-text-editor/main/example.PNG"></img>
				<p className="description">
					This is a progressive web application (PWA) that allows you to edit
					text on a webpage and then saves that text to an indexed DB. You can
					also install this application to your desktop and edit the text there
					so it will remain functional even without internet.
				</p>
			</a>

			<a
				href="https://github.com/AaronMikelKey/social-api"
				target="_blank"
				className="p6"
			>
				<h2>Social API</h2>
				<img src="https://raw.githubusercontent.com/AaronMikelKey/social-api/main/example.PNG"></img>
				<p className="description">
					This is a project demonstrating a NOSQL api that mimicks a social
					media platform. It includes users, thoughts, and reactions.
				</p>
			</a>
		</div>
	)
}

export default Portfolio
