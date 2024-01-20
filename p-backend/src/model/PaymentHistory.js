const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new mongoose.Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	paymentFor: {
		type: String,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	description: {
		type: String,
	}

}, { timestamps: true })


const Payment = mongoose.model('PaymentHistory', paymentSchema);

module.exports = Payment
