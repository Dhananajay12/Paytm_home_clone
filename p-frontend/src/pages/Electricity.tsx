
import BillingOptionAll from '../components/BillingOptionAll'
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group'
import { Label } from '../components/ui/label'
import { useState } from 'react'
import { Input } from '../components/ui/input'

const Electricity = () => {
	const [recharData, setRecharData] = useState({
		phone: 0,
		operator: '',
		Amount: 0
	})

	return (
		<div>
			<BillingOptionAll />

			<div className='mt-[-80px] container'>
				<div className='grid grid-cols-1 md:grid-cols-3'>
					<div className='px-2'>
						<div className='bg-white rounded-xl'>
							<div className='p-4'>
								<p className='text-[16px] font-medium'>Recharge or Pay Mobile Bill</p>
								<div>
									<RadioGroup defaultValue="comfortable" className='flex mt-4'>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Electricity Boards" id="r1" />
											<Label htmlFor="r1">Electricity</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Apartments" id="r2" />
											<Label htmlFor="r2">Apartments</Label>
										</div>

									</RadioGroup>
								</div>

								<Input type='text' placeholder='City' className="mt-5" value={recharData.operator} onChange={(e) => setRecharData({ ...recharData, operator: e.target.value })} />
								<Input type='text' placeholder='Electricity board' className="mt-5" value={recharData.operator} onChange={(e) => setRecharData({ ...recharData, operator: e.target.value })} />
								<Input type='text' placeholder='Type' className="mt-5" value={recharData.operator} onChange={(e) => setRecharData({ ...recharData, operator: e.target.value })} />
								<Input type='text' placeholder='Consumer Number' className="mt-5" value={recharData.operator} onChange={(e) => setRecharData({ ...recharData, operator: e.target.value })} />

								<button className='w-full bg-[#00baf2] p-2 rounded text-white font-bold mt-8'>Proceed to Recharge</button>
								
								{/* <DropdownMenu open={true}>
								<DropdownMenuContent>
									{comapany.map((item) => (
										<DropdownMenuItem>{item.name}</DropdownMenuItem>
									))}

								</DropdownMenuContent>
							</DropdownMenu> */}

							</div>

						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Electricity