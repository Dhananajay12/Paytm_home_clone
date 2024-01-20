const { APIConstants, customResponse } = require("../../helper/ApiResponse");
const Payment = require("../../model/PaymentHistory");
const User = require("../../model/User");


const getPaymentHistory = async (userId) => {

	try {
		const data = await Payment.find({ user: userId }).sort({ _id: -1 })

		return customResponse("login Successfully", APIConstants.StatusCode.Ok, APIConstants.Status.Success, data, '')
	} catch (err) {
		return customResponse("Error while login", APIConstants.StatusCode.BadRequest, APIConstants.Status.Failure, {}, err.message)
	}

}

const addMoneyController = async (req) => {
	try {
     
		const userData = await User.findOne({ _id: req.userId })

		if (!userData) throw new Error('User Not Found')

		const amount = userData?.walletAmount + parseInt(req?.walletMoney)

		const data = await User.updateOne({ _id: req.userId }, { $set: { walletAmount: amount} })

		const user = await User.findOne({ _id: req.userId })

		return customResponse("login Successfully", APIConstants.StatusCode.Ok, APIConstants.Status.Success, user, '')
	} catch (err) {
		return customResponse("Error while login", APIConstants.StatusCode.BadRequest, APIConstants.Status.Failure, {}, err.message)
	}

}


setTimeout( async() => {
	const userData = await User.findById('65aaec54116e9600de0ff7f0')
	console.log(userData)
	
}, 200);

const createPayment = async (req) => {
	try {
		const { paymentType, plan, user } = req;

		let description;
		if (paymentType === 'recharge') {
			description = `Recharge for mobile Rs ${plan?.price}`
		} else if (paymentType === 'electricity') {
			description = `Rlectricity Payment Rs ${plan?.price}`
		}

		const userData = await User.findById(user._id)

		if (userData.walletAmount < plan.price) throw new Error("inefficient amount in wallet")

		userData.walletAmount = userData.walletAmount - plan.price;

		userData.save();

		const data = await Payment.create({
			paymentFor: paymentType,
			amount: plan.price,
			user: user._id,
			description: description
		})
    

		return customResponse("Payment Successfully", APIConstants.StatusCode.Ok, APIConstants.Status.Success, userData, '')
	} catch (err) {
		return customResponse("Error while Payment", APIConstants.StatusCode.BadRequest, APIConstants.Status.Failure, {}, err.message)
	}

}

module.exports = {
	getPaymentHistory,
	createPayment,
	addMoneyController
}