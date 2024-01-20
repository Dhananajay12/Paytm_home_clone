const express = require('express');
const { router: authRouter } = require("./login")
const { router: paymentRouter } = require("./payments")
const { router: planRouter } = require("./rechargeplan")



const router = express.Router();


router.use('/auth', authRouter)
router.use('/payments', paymentRouter)
router.use('/plan', planRouter)



module.exports = { router }