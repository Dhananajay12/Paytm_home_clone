const { APIConstants, customResponse } = require("../../helper/ApiResponse");
const RechargePlan = require("../../model/RechargePlan");


// setTimeout(async () => {
// 	const data = await RechargePlan.create({
// 		operator: 'jio',
// 		type: "data_add_on",
// 		cicle:"mumbai",
// 		planType: 'recharge',
// 		data: "3 GB",
// 		validity: 0,
// 		description: 'Enjoy 3GB data valid till your current pack validity',
// 		price: 58,
// 	})
// 	console.log(data);
// }, 200);


const getRechargePlan = async (operator) => {

	try {
		const data = await RechargePlan.find({  operator })

		return customResponse("login Successfully", APIConstants.StatusCode.Ok, APIConstants.Status.Success, data, '')

	} catch (err) {
		return customResponse("Error while login", APIConstants.StatusCode.BadRequest, APIConstants.Status.Failure, {}, err.message)
	}

}


module.exports = {
	getRechargePlan,
}