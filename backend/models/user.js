const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
const PASSWORD_REGEX =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]{8,}$/

const userSchema = new mongoose.Schema(
	{
		first_name: {
			type: String,
			trim: true,
			required: [true, `Please add first name`],
			maxlength: 32,
		},
		last_name: {
			type: String,
			trim: true,
			required: [true, `Please add last name`],
			maxlength: 32,
		},
		email: {
			type: String,
			trim: true,
			unique: true,
			required: [true, `Please add an E-mail`],
			match: [EMAIL_REGEX, 'Please add a valid E-mail'],
		},
		password: {
			type: String,
			trim: true,
			required: [true, `Please add a Password`],
			minLength: [8, `password must have at least eight(8) characters`],
			match: [
				PASSWORD_REGEX,
				'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
			],
		},
	},
	{ timestamps: true }
)
//encrypt password
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}
	this.password = await bcrypt.hash(this.password, 10)
})

//verify password
userSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password)
}

// get the token
userSchema.methods.jwtGenerateToken = function () {
	return jwt.sign(
		{
			id: this.id,
		},
		process.env.JWT_SECRET,
		{ expiresIn: 3600 }
	)
}

module.exports = mongoose.model('User', userSchema)
