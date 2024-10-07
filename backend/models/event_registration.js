const mongoose = required('mongoose')

const eventRegistrationSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Attendee',
		required: true,
	},
	event: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Event',
		required: true,
	},
	registration_date: {
		type: Date,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	payment_status: {
		type: String,
		enum: [
			'pending, completed, failed, canceled, refunded,processing, expired',
		],
		default: 'pending',
	},
})

module.exports = mongoose.model('Event_Registration', eventRegistrationSchema)
