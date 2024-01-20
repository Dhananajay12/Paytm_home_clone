import React from 'react'


const Banner = () => {
	return (
		<>
			<div className='flex justify-center p-2 bg-[#f6f6f6]'>
				<h1> <span className='font-bold mt-4'>No Wallet KYC Required</span> 😊 to pay using UPI on Paytm.<span className='font-bold'> Learn more.</span>
				</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-4 mt-20'>
				<div className='col-span-2 flex justify-end'>
					<div className='w-full md:max-w-[600px] mt-20'>
						<img src='https://assetscdn1.paytm.com/images/catalog/view/310944/1697527183231.png' className='w-[70px]' alt='error' />
						<div className='mt-10'>
							<p className='md:text-[54px] font-bold'>India's Most-loved </p>
							<p className='md:text-[54px] font-bold mt-[-15px]'>Payments App </p>


							<p className='text-[20px] font-medium mt-2'>Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.</p>

							<div className='mt-5 w-full'>
								<a href='https://play.google.com/store/apps/details?id=net.one97.paytm' target='_blank' className='bg-[#000] p-2 text-white flex max-w-[200px] rounded-3xl pl-4'> Download Paytm App
								</a>
							</div>

						</div>
					</div>


				</div>
				<div className='col-span-1'></div>
				<div className='mt-20'>
					<img src='https://assetscdn1.paytm.com/images/catalog/view_item/850762/1697527211984.png' alt='error' />
				</div>
			</div>

		</>
	)
}

export default Banner