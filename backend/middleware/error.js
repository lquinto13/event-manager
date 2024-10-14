const ErrorResponse = require('../utils/errorResponse')

const errorHandler = (err, req, res, next) => {
	let error = { ...err }
	error.messaage = err.message
	//Mongoose Bad ObjectId
	if (err.name === 'CastError') {
		const message = 'Respurce not found'
		error = new ErrorResponse(message, 404)
	}
	res.status(error.statusCode || 500).json({
		success: false,
		error: error.message,
	})
}

module.exports = errorHandler
