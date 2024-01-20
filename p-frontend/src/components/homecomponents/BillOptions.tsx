import React from 'react'
import { Link } from 'react-router-dom'

const BillOptions = () => {
	return (
		<>
			<div className='bg-[#00baf2] mt-20'>
				<div className='container mx-auto px-20 p-10'>
					<p className='text-white text-[30px] font-bold ml-10'>Recharge & Pay Bills on Paytm.</p>
					<div className='grid grid-cols-1 md:grid-cols-7 mt-8 '>
						<div className='flex justify-center'>
							<Link to='/recharge'>
								<div>
									<img src='https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png' alt="error" className="w-[64px]" />
									<p className='mt-4 text-white'>Recharge</p>
									<p className='mt-1 text-white'>Prepaid <br></br>
										Mobile {'>'}</p>

								</div>
							</Link>
						</div>
						<div>
							<div className='flex justify-center'>
								<Link to='/electricity'>
									<div>
										<img src='https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png' alt="error" className="w-[64px]" />
										<p className='mt-4 text-white'>Pay</p>
										<p className='mt-1 text-white'>Electricity <br></br>
											Bill {'>'}</p>
									</div>
								</Link>
							</div>
						</div>
						<div>
							<div className='flex justify-center'>
								<Link to='/'>
								<div>
									<img src='https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png' alt="error" className="w-[64px]" />
									<p className='mt-4 text-white'>Recharge</p>
									<p className='mt-1 text-white'>DTH <br></br>
										Connection {'>'}</p>
								</div>
								</Link>
							</div>
						</div>
						<div>
							<div className='flex justify-center'>
								<Link to='/'>
								<div>
									<img src='https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png' alt="error" className="w-[64px]" />
									<p className='mt-4 text-white'>Book</p>
									<p className='mt-1 text-white'>Gas <br></br>
										Cyclinder {'>'}</p>
								</div>
								</Link>
							</div>
						</div>
						<div>
							<div className='flex justify-center'>
								<Link to='/'>
								<div>
									<img src='https://assetscdn1.paytm.com/images/catalog/view_item/1269194/1672827522093.png' alt="error" className="w-[64px]" />
									<p className='mt-4 text-white'>Pay</p>
									<p className='mt-1 text-white'>Broadband <br></br>
										Landline Bill {'>'}</p>
								</div>
								</Link>
							</div>
						</div>
						<div>
							<div className='flex justify-center'>
								<Link to='/'>
								<div>
									<img src='https://assetscdn1.paytm.com/images/catalog/view_item/1269198/1672828917034.png' alt="error" className="w-[64px]" />
									<p className='mt-4 text-white'>Pay</p>
									<p className='mt-1 text-white'>Education <br></br>
										Fee {'>'}</p>
								</div>
								</Link>
							</div>
						</div>
						<div>
							<div className='flex justify-center'>
								<div>
									<img src='https://assetscdn1.paytm.com/images/catalog/view_item/757701/1626268580682.png' alt="error" className="w-[64px]" />
									<p className='mt-4 text-white'>All</p>
									<p className='mt-1 text-white'>Paymemt <br></br>
										Services {'>'}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-[#0f4a8a] '>
				<div className='container mx-auto px-20 p-10'>
					<p className='text-white text-[30px] font-bold ml-10'>Book & Buy on Paytm.</p>
					<div className='grid grid-cols-1 md:grid-cols-7 mt-8 '>
						<div className='flex justify-center'>
							<div>
								<img src='https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png' alt="error" className="w-[64px]" />
								<p className='mt-4 text-white'>Recharge</p>
								<p className='mt-1 text-white'>Prepaid <br></br>
									Mobile {'>'}</p>

							</div>
						</div>
						<div>
							<div className='flex justify-center'>
								<div>
									<img src='https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png' alt="error" className="w-[64px]" />
									<p className='mt-4 text-white'>Recharge</p>
									<p className='mt-1 text-white'>Prepaid <br></br>
										Mobile {'>'}</p>
								</div>
							</div>
						</div>
						<div>
							<div className='flex justify-center'>
								<div>
									<img src='https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png' alt="error" className="w-[64px]" />
									<p className='mt-4 text-white'>Recharge</p>
									<p className='mt-1 text-white'>Prepaid <br></br>
										Mobile {'>'}</p>
								</div>
							</div>
						</div>
						<div>
							<div className='flex justify-center'>
								<div>
									<img src='https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png' alt="error" className="w-[64px]" />
									<p className='mt-4 text-white'>Recharge</p>
									<p className='mt-1 text-white'>Prepaid <br></br>
										Mobile {'>'}</p>
								</div>
							</div>
						</div>
						<div>
							<div className='flex justify-center'>
								<div>
									<img src='https://assetscdn1.paytm.com/images/catalog/view_item/1269198/1672828917034.png' alt="error" className="w-[64px]" />
									<p className='mt-4 text-white'>Recharge</p>
									<p className='mt-1 text-white'>Prepaid <br></br>
										Mobile {'>'}</p>
								</div>
							</div>
						</div>
						<div>
							<div className='flex justify-center'>
								<div>
									<img src='https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png' alt="error" className="w-[64px]" />
									<p className='mt-4 text-white'>Recharge</p>
									<p className='mt-1 text-white'>Prepaid <br></br>
										Mobile {'>'}</p>
								</div>
							</div>
						</div>
						<div>
							<div className='flex justify-center'>
								<div>
									<img src='https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png' alt="error" className="w-[64px]" />
									<p className='mt-4 text-white'>Recharge</p>
									<p className='mt-1 text-white'>Prepaid <br></br>
										Mobile {'>'}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}

export default BillOptions