const  mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true,
	},
	walletAmount: {
		type: Number,
		default: 0,
	},
	password: {
		type: String,
		require: true
	}
}, { timestamps: true })


const User = mongoose.model('User', userSchema);

module.exports = User
