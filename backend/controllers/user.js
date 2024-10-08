const User = require('../models/user')

exports.signup = async (req, res, next) => {
	const { email } = req.body
	const userExist = await User.findOne({ email })

	if (userExist) {
		return res
			.status(400)
			.json({ success: false, message: 'Email already exists' })
	}

	try {
		const user = await User.create(req.body)
		res.status(201).json({
			success: true,
			user,
		})
	} catch (err) {
		console.log(err)
		res.status(400).json({ succss: false, message: err.message })
	}
}

exports.signin = async (req, res, next) => {
	try {
		const { email, password } = req.body
		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: 'Email and password are required fields',
			})
		}

		const user = await User.findOne({ email })
		if (!user) {
			return res
				.status(400)
				.json({ success: false, message: 'User credentials are incorrect' })
		}

		const isMatch = await user.comparePassword(password)
		if (!isMatch) {
			return res.status(400).json({
				success: false,
				message: 'Password is incorrect',
			})
		}

		const token = await user.jwtGenerateToken()

		generateToken(user, 200, res)
	} catch (err) {
		console.log(err)
		return res.status(400).json({
			success: false,
			message: 'Cannot login check your credentials',
		})
	}
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
