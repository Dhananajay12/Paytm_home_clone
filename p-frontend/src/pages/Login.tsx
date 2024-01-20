import React, { useState } from 'react'
import { CircleUserRound, Search, ShoppingCart } from 'lucide-react'
import { Button } from "../components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../components/ui/dialog"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


interface Props {
	open: boolean,
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Login: React.FC<Props> = ({ open, setOpen }) => {

	const [register, setRegiter] = useState({
		name: '',
		phone: 0,
		password: '',
	})
	const history = useNavigate()

	const [loginOrRegister, setLoginOrRegister] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		try {
			e.preventDefault();
			let response: any = null
			const { name, phone, password } = register;

			if (loginOrRegister) {

				if (!phone || !password) {
					alert("Please fill all fields Login")
					return
				} else if (phone.toString().length != 10) {
					alert("Please enter valid phone number")
					return
				}

				response = await axios.post(`http://localhost:4000/api/v3/auth/login`, {
					phone: register.phone,
					password: register.password
				})

			} else {

				if (!name || !phone || !password) {
					alert("Please fill all fields ")
					return
				} else if (phone.toString().length != 10) {
					alert("Please enter valid phone number")
					return
				}

				response = await axios.post(`http://localhost:4000/api/v3/auth/register`, {
					name: register.name,
					phone: register.phone,
					password: register.password
				})
			}

			if (response.data.statusCode === 200) {
				if (loginOrRegister) {
					if (register.phone === response.data.data.phone) {
						alert("Successfully login");
						history('/')
						localStorage.setItem("loggedIn", "yes");
						localStorage.setItem("userInfo", JSON.stringify(response.data.data));
						setOpen(false)
					} else {
						alert('Invalid Credentials')
					}
				} else {
					localStorage.setItem("loggedIn", "yes");
					localStorage.setItem("userInfo", JSON.stringify(response.data.data));
					alert("Successfully Registered");
					history('/')
					setOpen(false)
				}

				setRegiter({
					name: '',
					phone: 0,
					password: '',
				})

			} else {
				alert(response.data.error)
			}


		} catch (err: any) {
			alert("please check server")
			console.log(err.message);
		}
	}



	return (
		<>
			<Dialog open={open} onOpenChange={() => { setOpen(false), setLoginOrRegister(false) }} >
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>
							{loginOrRegister ? 'Login in your account' : 'Register your Paytm account'}
						</DialogTitle>
						<DialogDescription className=''>
							Make changes to your profile here. Click save when you're done.
						</DialogDescription>
					</DialogHeader>
					<form onSubmit={handleSubmit}>
						{loginOrRegister ?
							<div className="grid gap-4 py-4">

								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="username" className="text-right">
										phone
									</Label>
									<Input id="username" type='number' value={register.phone} onChange={(e) => setRegiter({ ...register, phone: parseInt(e.target.value) })} className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="username" className="text-right">
										password
									</Label>
									<Input id="username" value={register.password} onChange={(e) => setRegiter({ ...register, password: e.target.value })} className="col-span-3" />
								</div>
							</div>

							: <div className="grid gap-4 py-4">
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="name" className="text-right">
										Name
									</Label>
									<Input id="name" value={register.name} onChange={(e) => setRegiter({ ...register, name: e.target.value })} className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="username" className="text-right">
										phone
									</Label>
									<Input id="username" type='number' value={register.phone} onChange={(e) => setRegiter({ ...register, phone: parseInt(e.target.value) })} className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="username" className="text-right">
										password
									</Label>
									<Input id="username" value={register.password} onChange={(e) => setRegiter({ ...register, password: e.target.value })} className="col-span-3" />
								</div>
							</div>

						}

						<DialogFooter>
							<Button type="submit">Save changes</Button>
						</DialogFooter>
					</form>
					<p className='mt-2 p-2 cursor-pointer text-blue-700' onClick={() => {
						setLoginOrRegister(!loginOrRegister),
							setRegiter({
								name: '',
								phone: 0,
								password: '',
							})
					}}> {loginOrRegister ? " Dont have an account?" : "Have a account?"} </p>
					<p className=' p-2'>To create an account download Paytm App</p>

					<div className='flex mt-[-10px]'>
						<img src='https://accounts.paytm.com/oauth-js-sdk/c6be4705ad32e081df3d6816faa4555a.svg' className='w-full p-2' />
						<img src='https://accounts.paytm.com/oauth-js-sdk/c0e2feaef05109ec2b59fd0e577ed6a9.svg' className='w-full  p-2' />
					</div>
				</DialogContent>
			</Dialog >


		</>
	)
}

export default Login