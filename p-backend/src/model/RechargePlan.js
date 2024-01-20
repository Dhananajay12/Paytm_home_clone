const mongoose = require("mongoose");
const { Schema } = mongoose;

const RechargeSchema = new mongoose.Schema({
	operator: {
		type: String,
		required: true,
		enum: ['jio', 'airtle', "vi"]
	},
	type: {
		type: String,
		required: true,
		enum: ['popular', 'smart_phone', "data_add_on", "yearly_plans", 'entertainment', 'jio_bharat']
	},
	cicle: {
		type: String,
		required: true,
		enum: ["mumbai", 'delhi']
	},
	planType: {
		type: String,
		enum: ["recharge"]
	},
	data: {
		type: String,

	},
	validity: {
		type: Number,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
	}

}, { timestamps: true })


const RechargePlan = mongoose.model('RechargePlan', RechargeSchema);

module.exports = RechargePlan
