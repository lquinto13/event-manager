const mongoose = require('mongoose')
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
const PASSWORD_REGEX =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const attendeeSchema = new mongoose.Schema({
	event: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Event',
		required: true,
	},
	first_name: {
		type: String,
		trim: true,
		required: [true, `Please enter first name`],
		maxlength: 32,
	},
	last_name: {
		type: String,
		trim: true,
		required: [true, `Please enter last name`],
		maxlength: 32,
	},
	email: {
		type: String,
		trim: true,
		required: [true, `Please enter E-mail`],
		match: [EMAIL_REGEX, `Please enter a valid E-mail`],
	},
	password: {
		type: String,
		trim: true,
		required: [true, `Please enter a password`],
		minlength: [8, `Password must have at least eight(8) characters`],
		match: [
			PASSWORD_REGEX,
			'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
		],
	},
	contact_number: {
		type: Number,
		trim: true,
		required: [true, `Please enter a contact number`],
		maxlength: [14, `Minimum`],
	},
	birthdate: {
		type: Date,
		required: [true, `Please add your birthdate`],
	},
	address: {
		type: String,
		trim: true,
		required: [true, `Please enter your address`],
	},
	registration_date: {
		type: Date,
	},
})

module.exports = mongoose.model('Attendee', attendeeSchema)
