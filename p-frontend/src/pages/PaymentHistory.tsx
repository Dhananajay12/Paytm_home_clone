import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PaymentHistoryTable from '../components/paymenthistory/PaymentHistoryTable'

const PaymentHistory = () => {

	const [payments, setPayments] = useState([])

	const getPayments = async () => {

		try{
			const user: any = localStorage.getItem("userInfo")
			const parsevalue = JSON.parse(user)

			const response = await axios.get(`http://localhost:4000/api/v3/payments/getPayment/${parsevalue._id}`)
			if (response.data.statusCode === 200) {
				setPayments(response.data.data)
			}
		}catch(err:any){
			console.log(err.message)
		}
	}

	console.log(payments)
	useEffect(() => {
		getPayments()
	}, [])

	return (
		<div>
			<PaymentHistoryTable payments={payments} />
		</div>
	)
}

export default PaymentHistory