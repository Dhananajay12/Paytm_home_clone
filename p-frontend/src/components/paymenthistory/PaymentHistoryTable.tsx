import React from 'react'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table"

const PaymentHistoryTable = ({ payments }:any) => {

	return (
		<div>

			<div className='bg-[#002970] pt-10 pb-40 min-h-[50px] flex justify-center'>

				<p className='text-white text-xl'> Home {">"} payments</p>
			</div>
			<div className='container mt-[-60px] bg-white'>
				{payments?.length > 0 ? <Table>
					<TableCaption>A list of your recent invoices.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="">PaymentId</TableHead>
							<TableHead className="">PaymentType</TableHead>
							<TableHead className="">Price</TableHead>
							<TableHead className="">Desciptions</TableHead>
						</TableRow>
						<hr></hr>
					</TableHeader>
					<TableBody>
						{payments?.map((invoice: any) => (
							<TableRow key={invoice._id}>
								<TableCell className="font-medium">{invoice._id}</TableCell>
								<TableCell>{invoice.paymentFor}</TableCell>
								<TableCell>{invoice.amount}</TableCell>
								<TableCell className="">{invoice.description}</TableCell>
								<TableCell className="">

								</TableCell>
							</TableRow>
						))}
					</TableBody>

				</Table>:<h1>No Payment History Avaliable</h1> }	
			</div>
		</div>
	)
}

export default PaymentHistoryTable