const jwt = require('jsonwebtoken')
const User = require('../models/user')
const ErrorResponse = require('../utils/errorResponse')

// check if user is authenticated
exports.isAuthenticated = async (req, res, next) => {
	const { token } = req.cookies
	//make sure token exists
	if (!token) {
		next(new ErrorResponse('You must login to access this resource!', 400))
	}

	try {
		//verify token
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.user = await User.findById(decoded.id)
		next()
	} catch (err) {
		next(new ErrorResponse('You must login to access this resource!', 400))
	}
}
