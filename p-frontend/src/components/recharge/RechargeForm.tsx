import { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "../../utils"
import { Button } from "../ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "../ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "../ui/popover"
import axios from 'axios'
import RechargeTable from './RechargeTable'

const frameworks = [
	{
		value: "jio",
		label: "Jio",
	},
	{
		value: "airtel",
		label: "Airtel",
	},
]


const RechargeForm = () => {


	const [recharData, setRecharData] = useState({
		phone: 0,
		operator: 'jio',
		amount: 0
	})
	const [selectedPlan, setSelectedPlan] = useState<any>({})

	const [radio, setRadio] = useState('Prepaid')

	const [rechargePlan, setRechargePlan] = useState([])

	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("jio")

	const getRecharger = async () => {
		const response = await axios.post(`http://localhost:4000/api/v3/plan/getplan`,
			{
				operator: value,
				user: localStorage.getItem("userInfo")
			}
		)
		if (response.data.statusCode === 200) {
			setRechargePlan(response.data.data)
		}
	}

	const selectPlan = (data: any) => {
		setSelectedPlan(data);
		setRecharData({ ...recharData, amount: data.price })
	}
	const rechargePhone = async () => {
		const login = localStorage.getItem("loggedIn")
		if (rechargePlan.length == 0) {
			alert("No Recharge Option Available")
			return
		} else if (recharData.phone.toString().length != 10) {
			alert("Please enter valid phone number")
			return
		} else if (recharData.amount == 0 || !recharData.amount) {
			alert("Please select plan")
			return
		} else if (!login) {
			alert("Please login fist")
			return
		}
		const data: any = localStorage.getItem('userInfo')

		const response = await axios.post(`http://localhost:4000/api/v3/payments/createPayment`,
			{
				plan: selectedPlan,
				paymentType: 'recharge',
				user: JSON.parse(data)
			}
		)
		if (response.data.statusCode === 200) {
			alert(response.data.message)
			setRecharData({
				phone: 0,
				operator: 'jio',
				amount: 0
			})
			localStorage.setItem('userInfo', JSON.stringify(response.data.data) )
			window.location.reload();
		} else {
			alert(response.data.error)
		}
	}


	useEffect(() => {
		getRecharger();
	}, [value])



	return (
		<>
			<div className='mt-[-80px] md:px-20'>
				<div className='grid grid-cols-1 md:grid-cols-3'>
					<div className='bg-white rounded-xl'>
						<div className='p-5'>
							<p className='text-[17px] font-medium'>Recharge or Pay Mobile Bill</p>
							<div>
								<RadioGroup value={radio} onChange={(e) => setRadio((e.target as HTMLInputElement).value)} className='flex mt-5'>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="Prepaid" id="r1" />
										<Label htmlFor="r1">Prepaid</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="Postpaid" id="r2" />
										<Label htmlFor="r2">Postpaid</Label>
									</div>

								</RadioGroup>
							</div>

							<Input type='number' placeholder='Mobile Number' className="mt-6" value={recharData.phone} onChange={(e) => setRecharData({ ...recharData, phone: parseInt(e.target.value) })} />
							{/* <Input type='text' placeholder='Operator' className="mt-5" value={recharData.operator} onChange={(e) => setRecharData({ ...recharData, operator: e.target.value })} /> */}

							<Popover open={open} onOpenChange={setOpen}>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										role="combobox"
										aria-expanded={open}
										className="w-full mt-3 justify-between"
									>
										{value
											? frameworks.find((framework) => framework.value === value)?.label
											: "Select framework..."}
										<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-full md:min-w-[510px] p-0">
									<Command>
										<CommandInput placeholder="Search framework..." className="h-9" />
										<CommandEmpty>No framework found.</CommandEmpty>
										<CommandGroup>
											{frameworks.map((framework) => (
												<CommandItem
													key={framework.value}
													value={framework.value}
													onSelect={(currentValue) => {
														setValue(currentValue === value ? "" : currentValue)
														setOpen(false)
													}}
												>
													{framework.label}
													<CheckIcon
														className={cn(
															"ml-auto h-4 w-4",
															value === framework.value ? "opacity-100" : "opacity-0"
														)}
													/>
												</CommandItem>
											))}
										</CommandGroup>
									</Command>
								</PopoverContent>
							</Popover>

							<Input type='number' placeholder='Amount' className="mt-5" value={recharData.amount} onChange={(e) => setRecharData({ ...recharData, amount: parseInt(e.target.value) })} />
							{recharData?.amount === selectedPlan?.price && <p className='text-[12px] mt-3 text-[#58cf52]'>{selectedPlan?.description}</p>}
							<button className='w-full bg-[#00baf2] p-2 rounded text-white font-bold mt-8' onClick={() => rechargePhone()}>Proceed to Recharge</button>

						</div>

					</div>
					<div className='col-span-2 px-2 '>
						<div className='bg-white rounded-xl p-4'>
							<div className='flex'>
								<p className='mx-2'>Browse Plan </p>
								<p className='mx-2'>Promo Codes</p>
							</div>

							<hr className='mt-2'></hr>
							<div id="browse-plan">
								<p className='font-medium mt-3 mx-2 text-lg'>Browse Plans of {value} - Mumbai</p>
								{rechargePlan?.length > 0 && recharData.phone.toString().length > 3 ?
									<>
										<div className='flex justify-evenly'>
											<p className=' mt-3 mx-3 text-md text-gray-400'>Popular</p>
											<p className=' mt-3 mx-2 text-md text-gray-400'>Smart Phone</p>
											<p className=' mt-3 mx-2 text-md text-gray-400'>Data Add on</p>
											<p className=' mt-3 mx-2 text-md text-gray-400'>Yearly Plans</p>
											<p className=' mt-3 mx-2 text-md text-gray-400'>Emtertainment</p>
											<p className=' mt-3 mx-2 text-md text-gray-400'>JioBharat</p>

											<p className=' mt-3 mx-2 text-md text-gray-400'>ISD/International Roaming</p>
										</div>
										<hr className='mt-2'></hr>
										<RechargeTable rechargePlan={rechargePlan} selectPlan={selectPlan} />
									</> : <h1 className='mt-4 ml-2'>No Plan For This Operator</h1>
								}
							</div>

						</div>
					</div>
				</div>
			</div>



		</>
	)
}

export default RechargeForm