const Event = require('../models/event')

exports.createEvent = async (req, res, next) => {
	try {
		const event = Event.create(req.body)
		res.status(201).json({
			success: true,
			event,
		})
	} catch (err) {
		console.log(err)
		res.status(400).json({ succss: false, message: err.message })
	}
}
