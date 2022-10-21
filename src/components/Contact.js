import React, { useEffect } from 'react'
import '../assets/css/contact.css'

const Contact = () => {
	const inputsList = document.getElementsByTagName('input')

	useEffect(() => {
		for (const [key, value] of Object.entries(inputsList)) {
			console.log(key, value)
			value.addEventListener('focusout', (event) => {
				if (value.value === '') {
					event.target.classList.add('invalid')
				} else {
					event.target.classList.remove('invalid')
				}
			})
		}
	})
	return (
		<div>
			<form>
				<div>
					<label htmlFor="name">Name:</label>
					<input type="text" name="name" id="name" required={true}></input>
					<span></span>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input type="email" name="email" id="email" required={true}></input>
					<span></span>
				</div>
				<div>
					<label htmlFor="message">Message:</label>
					<textarea
						name="message"
						rows="5"
						cols="66"
						id="message"
						required={true}
					></textarea>
				</div>
				<div>
					<button htmlFor="submit">Submit</button>
				</div>
			</form>
		</div>
	)
}

export default Contact
