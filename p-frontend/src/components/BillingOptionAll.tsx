import React from 'react'
import { Link } from 'react-router-dom'

const BillingOptionAll = () => {
	return (
		<div>
			<div className='flex justify-center p-3 bg-[#f6f6f6]'>
				<h1> <span className='font-medium mt-4'>No Wallet KYC Required</span> 😊 to pay using UPI on Paytm.<span className='font-medium'> Learn more.</span>
				</h1>
			</div>
			<div className='bg-[#002970] pt-10 pb-40 '>
				<div className='container mx-auto grid grid-cols-1 lg:grid-cols-6 '>
					<div className='flex flex-col items-center justify-center'>
						<Link to="/recharge">
							<img src="https://assetscdn1.paytm.com/images/catalog/view_item/105637/1686289280267.png" alt="error" />
						</Link>
						<p className='mt-4 text-white'>Prepaid/Postpaid</p>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<Link to="/electricity">
							<img src="https://assetscdn1.paytm.com/images/catalog/view_item/136550/1554946473611.png" alt="error" />
						</Link>
						<p className='mt-4 text-white'>Electricity</p>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<Link to="/dth">
							<img src="	https://assetscdn1.paytm.com/images/catalog/view_item/105638/1554946480031.png" alt="error" />
						</Link>
						<p className='mt-4 text-white'>DTH</p>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<Link to="/metro">
							<img src="https://assetscdn1.paytm.com/images/catalog/view_item/105651/1554946474398.png" alt="error" />
						</Link>
						<p className='mt-4 text-white'>Metro</p>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<Link to="/broadband-landline">
							<img src="	https://assetscdn1.paytm.com/images/catalog/view_item/105643/1602741621166.png" alt="error" />
						</Link>
						<p className='mt-4 text-white'>Broadband/Landline</p>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<Link to="/Education">
							<img src="https://assetscdn1.paytm.com/images/catalog/view_item/105648/1602741754777.png" alt="error" />
						</Link>
						<p className='mt-4 text-white'>Education</p>
					</div>

				</div>

			</div>
		</div>
	)
}

export default BillingOptionAll