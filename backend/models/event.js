const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema(
	{
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
		status: {
			type: String,
			enum: ['upcoming', 'ongoing', 'completed', 'canceled'],
			default: 'upcoming',
		},
		inviteCode:{
			type:String,
			required:true
		},
		paymentDetails:{
			preferredMethod:{
				type:String,
				enum:['bank transfer', 'cash', 'mobile payment'],
				default:'bank transfer'
			},
			details:{
				accountNumber:{
					type:String,
					required:true
				},
				bankDetails:{
					type:String,
					required:true
				},
				holderName:{
					type:String,
					required:true
				}
			},
			qrCode:{
				imageUrl:String,
				uploadDate: Date,
				description: String
			}
		}
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Event', eventSchema)
