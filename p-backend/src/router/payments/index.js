
const express = require('express');
const {  createPayment, getPaymentHistory, addMoneyController } = require('./controller');
const router = express.Router();

router.get('/getPayment/:userId', async (req, res) => {
	const { userId } = req.params
	const response = await getPaymentHistory(userId)
	res.json(response);
})

router.post('/createPayment', async (req, res) => {
	const response = await createPayment(req.body)
	res.json(response);
})

router.post('/addMoney', async (req, res) => {
	const response = await addMoneyController(req.body)
	res.json(response);
})


module.exports = { router }