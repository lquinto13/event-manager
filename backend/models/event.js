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
			required:true,
			unique:true
		},
		itenerary:[
			{
				title:{
					type:String,
					required:true
				},
				description:{
					type:String
				},
				location:{
					type:String
				},
				startTime:{
					type:Date,
					required:true
				},
				endTime:{
					type:Date
				},
				link:{
					type:String
				}
			}
		],
		organizer:{
			type:mongoose.Schema.Types.ObjectId,
			ref:'User',
			required:true
		},
		createdAt:{
			type: Date, 
			default: Date.now 
		},
		updatedAt:{
			type:Date,
			default: Date.now
		}
		
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Event', eventSchema)
