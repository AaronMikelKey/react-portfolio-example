import jandkscreenshot from '../images/JandkScreenshot.png'
import twitchSubsScreenshot from '../images/twitchSubsScreenshot.png'
import teamBuilder from '../images/team-builder.png'
<<<<<<< HEAD
import sunrise from '../images/personalSunrise'
=======
>>>>>>> main

const projects = [
	{
		number: 'p1',
		link: 'https://jandkpaintsandpix.com',
		title: 'J&K Paints and Pixels',
		imgLink: jandkscreenshot,
		description:
			'A react website I made for a local business. The portfolio page uses the facebook graph API to pull the most recent pictures from their uploads and displays them in columns, but ordered left to right.',
	},
	{
		number: 'p2',
		link: 'https://twitch-streamer-check.herokuapp.com',
		title: 'Twitch Follows Checker',
		imgLink: twitchSubsScreenshot,
		description: `An app I made to showcase intergration with the Twitch.tv API. This
		app uses OAUTH2 to sign into twitch and pulls the list of streamers
		you follow, then displays their stream info if they are currently
		streaming. Since it is hosted on heroku's hobby dynos it may take a
		few seconds to start when you visit.`,
	},
	{
		number: 'p3',
		link: 'https://github.com/AaronMikelKey/team-builder',
		title: 'CLI Team Builder',
		imgLink: teamBuilder,
		description: `This is a CLI app that will allow you to build a team consisting of a
		manager, and as many engineers and/or interns as you would like. You
		can then input their information, and the app will create a static
		HTML page that displays the team.`,
	},
	{
		number: 'p4',
		link: 'https://personal-sunrise-test.herokuapp.com',
		title: 'Rental Property Reservation and Control App',
		imgLink: sunrise,
		description: `This was a group project for a member who wanted to create a
		website for his rental property.  This allows users to request a reservation, and allows owners to confirm those reservations and add them to a calendar.
		<a
			href="https://github.com/EricksonVIK/Personal_Sunrise_NC"
			className="link"
		>
			You can view the repo and contributors here.
		</a>`,
	},
	{
		number: 'p5',
		link: 'https://github.com/AaronMikelKey/pwa-text-editor',
		title: 'PWA Text Editor',
		imgLink:
			'https://raw.githubusercontent.com/AaronMikelKey/pwa-text-editor/main/example.PNG',
		description: `This is a progressive web application (PWA) that allows you to edit
					text on a webpage and then saves that text to an indexed DB. You can
					also install this application to your desktop and edit the text there
					so it will remain functional even without internet.`,
	},
	{
		number: 'p6',
		link: 'https://github.com/AaronMikelKey/social-api',
		title: 'Social API',
		imgLink:
			'https://raw.githubusercontent.com/AaronMikelKey/social-api/main/example.PNG',
		description: `
		This is a project demonstrating a NOSQL api that mimicks a social
		media platform. It includes users, thoughts, and reactions.`,
	},
]

export default projects
