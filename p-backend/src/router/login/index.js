
const express = require('express');
const { loginController, registerController, getUserById } = require('./controller');
const router = express.Router();

router.post('/login', async (req, res) => {
	const { phone, password } = req.body
	const response = await loginController(phone, password)
	res.json(response);
})

router.post('/register', async (req, res) => {
	const { name, phone, password } = req.body
	const response = await registerController(name, phone, password)
	res.json(response);
})

router.get('/getUser/:id', async (req, res) => {
	const { id} = req.params
	const response = await getUserById(id)
	res.json(response);
})


module.exports =  { router }