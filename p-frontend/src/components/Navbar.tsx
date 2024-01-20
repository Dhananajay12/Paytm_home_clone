
import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import Login from '../pages/Login';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Navbar = () => {

	const [isOpen, setIsOpen] = useState(false);
	const [open, setOpen] = useState(false);
	const [profileOpen, setProfileOpen] = useState(false);
	const [openAddMoney, setOpenAddMoney] = useState(false);
	const [walletMoney, setWalletMoney] = useState<string>();


	const navigate = useNavigate()

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	const loggedIn = localStorage.getItem('loggedIn')
	const data: any = localStorage.getItem('userInfo')
	let userData = JSON.parse(data)



	const logout = () => {
		localStorage.removeItem('userInfo')
		localStorage.removeItem('loggedIn')
		navigate('/')
	}

	const addMoneyInAcoount = async () => {

		try {
			const response = await axios.post(`http://localhost:4000/api/v3/payments/addMoney`,
				{
					walletMoney,
					userId: userData._id
				}
			)

			if (response.data.statusCode === 200) {
				localStorage.setItem('userInfo', JSON.stringify(response.data.data));
				setWalletMoney('')
				setOpenAddMoney(false)
			} else {
				alert(response.data.error)
			}
		} catch (err: any) {
			console.log(err.message)
		}

	}

	return (
		<>
			<div className=" p-4 shadow-lg">
				<div className="container mx-auto flex justify-evenly items-center">
					<Link to="/"> <img src={logo} alt="error" /></Link>
					<div className="lg:flex hidden">
						<p className="text-lg  text-[#3d3d3d] font-medium mr-5 cursor-pointer">Paytm for Consumer</p>
						<p className="text-lg text-[#3d3d3d] font-medium mr-5 cursor-pointer">Paytm For Business</p>
						<p className="text-lg  text-[#3d3d3d] font-medium mr-5 cursor-pointer">Investor Relations</p>
						<p className="text-lg text-[#3d3d3d] font-medium mr-5 cursor-pointer">Company</p>
						<p className="text-lg text-[#3d3d3d] font-medium mr-5 cursor-pointer">Career</p>
					</div>
					<div
						className={`lg:hidden lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'
							} mt-4 lg:mt-0`}
					>
						<p className=" mr-4">Home</p>
						<p className=" mr-4">About</p>
						<p className=" mr-4">Contact</p>
						<p className="">Product</p>
					</div>

					<div className='flex'>
						{loggedIn ?
							<div>

								<div className='flex rounded-3xl bg-[#002970] p-1 cursor-pointer' onClick={() => setProfileOpen(!profileOpen)} >
									<p className='mt-1 mr-1 text-white px-2 font-bold'>Hi,{userData?.phone}</p>
									<img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logoutImg.svg" alt='errpr' />
								</div>

								{profileOpen && <div className='min-w-[250px] z-10  bg-white rounded shadow-xl absolute px-2 ml-[-100px] mt-[10px]'>
									<div className='flex pr-7 pl-3 pt-4'>
										<div className='py-4'>
											<p className='flex text-[#888888] text-[14px]' ><img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/wallet.png" alt="error" className='w-[18px] h-[15px] mx-1 mt-1' />Wallet Balance</p>
											<p className='mx-1 text-[18px] font-medium'>Rs.{userData?.walletAmount || 0}</p>
										</div>
										<div className='py-4 pl-10 mt-1 cursor-pointer' onClick={() => setOpenAddMoney(!openAddMoney)}>
											<p className='flex justify-end'>
												<img src='https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/addMoney.png' alt='error' className='w-[20px] h-[18px]' /></p>
											<p className='text-[#888888] text-[14px]'>add money</p>
										</div>
									</div>
									<hr></hr>
									<div className='px-3 pb-4'>


										{openAddMoney && <div>
											<input type='number' placeholder='Add money'
												value={walletMoney}
												onChange={(e) => setWalletMoney(e.target.value)}
												className='w-full mt-2 mb-2 p-1 border-gray-100 border-sm' />
											<br></br>
											<button className='w-full mt-2 bg-blue-600 rounded p-1 text-white' onClick={() => addMoneyInAcoount()}>Submit</button>
											<hr></hr>
											<br></br>
										</div>}
									

										<Link to="/payment-history" className=' text-[#5c5c5c] font-medium cursor-pointer '>View Payments</Link>
										{/* <p className='mt-5 text-[#5c5c5c] font-medium cursor-pointer'>Your Wallet</p> */}
										<p className='mt-5 text-[#5c5c5c] font-medium cursor-pointer' onClick={() => logout()}>Sign Out</p>
									</div>
								</div>}

							</div>

							: <div className='flex rounded-3xl bg-[#00baf2] p-1 hover:bg-[#35358b] cursor-pointer' onClick={() => setOpen(true)}>
								<p className='mt-1 mr-1 text-white px-2 font-bold'>sign in</p>
								<img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/loginImg.svg" alt='errpr' />
							</div>}

						<div className="lg:hidden">
							<button
								onClick={toggleNavbar}
								className="focus:outline-none"
							>
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div >
			<Login open={open} setOpen={setOpen} />
		</>
	)
}

export default Navbar