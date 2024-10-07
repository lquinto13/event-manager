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
