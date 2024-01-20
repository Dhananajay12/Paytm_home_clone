
import BillingOptionAll from '../components/BillingOptionAll'
import RechargeForm from '../components/recharge/RechargeForm'

const company = [
	{ img: 'https://assetscdn1.paytm.com/images/catalog/operators/1644409460661.png', name: 'Airtel' },
	{ img: 'https://assetscdn1.paytm.com/images/catalog/operators/1648138982857.png', name: 'Jio' }
]



const Recharge = () => {

	return (
		<div>
			<BillingOptionAll />
			<RechargeForm />
		</div>
	)
}

export default Recharge