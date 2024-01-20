const { customResponse, APIConstants } = require("../../helper/ApiResponse");
const User = require("../../model/User");



const loginController = async (phone, password) => {

	try {
		const data = await User.findOne({ phone: phone })

		if (!data) throw new Error("user not found please register first");

		if (data.password != password) throw new Error("Invalid credentials");

		return customResponse("login Successfully", APIConstants.StatusCode.Ok, APIConstants.Status.Success, { ...data?._doc, password: null }, '')
	} catch (err) {
		return customResponse("Error while login", APIConstants.StatusCode.BadRequest, APIConstants.Status.Failure, {}, err.message)
	}
}


const registerController = async (name, phone, password) => {
	try {

		if (!name || !phone || !password) throw new Error('please provide all fields');
		const user = await User.findOne({ phone })
		if (user) throw new Error('Phone Number is already registered')

		const userData = await User.create({ name, phone, password })

		return customResponse("Successfully register ", APIConstants.StatusCode.Ok, APIConstants.Status.Success, { ...userData?._doc, password: null, }, '')

	} catch (err) {
		return customResponse("Error while creating user", APIConstants.StatusCode.BadRequest, APIConstants.Status.Failure, {}, err.message)
	}
}

const getUserById = async (id) => {
	try {

		const user = await User.findOne({ _id: id })

		if (!user) throw new Error('user not found')

		return customResponse("Successfully Fetched ", APIConstants.StatusCode.Ok, APIConstants.Status.Success, { ...user?._doc, password: null, }, '')

	} catch (err) {
		return customResponse("Error while fetching", APIConstants.StatusCode.BadRequest, APIConstants.Status.Failure, {}, err.message)
	}

}

module.exports = {
	loginController,
	registerController,
	getUserById
}