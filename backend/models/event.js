const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	name: {
		type: String,
		trim: true,
		maxlength: 64,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	tickets: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		enum: ['upcoming', 'ongoing', 'completed', 'canceled'],
		default: 'upcoming',
	},
	start_time: {
		type: Date,
		required: true,
	},
	end_time: {
		type: Date,
		required: true,
	},
})

module.exports = mongoose.model('Event', eventSchema)
