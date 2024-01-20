const express = require('express');
const { getRechargePlan } = require('./controller');
const router = express.Router();

router.post('/getplan', async (req, res) => {
	const {  operator  } = req.body
	const response = await getRechargePlan( operator)
	res.json(response);
})



module.exports = { router }