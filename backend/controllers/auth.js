const User = require('../models/user')
const ErrorResponse = require('../utils/errorResponse')

exports.signup = async (req, res, next) => {
	const { email, password } = req.body
	const userExist = await User.findOne({ email })
	if (userExist) {
		next(new ErrorResponse('E-mail already exists', 400))
	}

	try {
		const user = await User.create(req.body)
		res.status(201).json({
			success: true,
			user,
		})
	} catch (err) {
		console.log(err)
		res.status(400).json({ success: false, message: err.message })
	}
}

exports.signin = async (req, res, next) => {
	try {
		const { email, password } = req.body
		if (!email || !password) {
			next(new ErrorResponse('E-mail and password are required', 400))
		}

		const user = await User.findOne({ email })
		if (!user) {
			next(new ErrorResponse('Invalid credentials', 400))
		}

		const isMatch = await user.comparePassword(password)
		if (!isMatch) {
			next(new ErrorResponse('Password is incorrect', 400))
		}

		const token = await user.jwtGenerateToken()

		generateToken(user, 200, res)
	} catch (err) {
		next(new ErrorResponse('Cannot login check your credentials', 400))
	}
}

exports.logout = (req, res, next) => {
	res.clearCookie('token')
	res.status(200),
		json({
			success: true,
			message: 'logged out',
		})
}

//Users Profile
exports.userProfile = async (req, res, next) => {
	const user = await User.findById(req.user.id)
	res.status(200).json({
		success: true,
		user,
	})
}

const generateToken = async (user, status, res) => {
	const token = await user.jwtGenerateToken()
	const options = {
		httpOnly: true,
		expires: new Date(Date.now() + Number(process.env.EXPIRE_TOKEN)),
	}
	res
		.status(status)
		.cookie('token', token, options)
		.json({ success: true, token })
}
