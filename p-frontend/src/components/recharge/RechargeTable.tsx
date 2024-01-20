import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table"

const invoices = [
	{
		invoice: "INV001",
		paymentStatus: "Paid",
		totalAmount: "$250.00",
		paymentMethod: "Credit Card",
	},
	{
		invoice: "INV002",
		paymentStatus: "Pending",
		totalAmount: "$150.00",
		paymentMethod: "PayPal",
	},
	{
		invoice: "INV003",
		paymentStatus: "Unpaid",
		totalAmount: "$350.00",
		paymentMethod: "Bank Transfer",
	},
]

const RechargeTable = ({ rechargePlan, selectPlan }:any) => {
	return (
		<div>
			<Table>
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="">Circle</TableHead>
						<TableHead className="w-[100px]">Plan Type</TableHead>
						<TableHead className="w-[100px]">Data </TableHead>
						<TableHead className="w-[100px]">Validity</TableHead>
						<TableHead >description</TableHead>
						<TableHead className="w-[100px]" >price</TableHead>


					</TableRow>
					<hr></hr>
				</TableHeader>
				<TableBody>
					{rechargePlan?.map((invoice:any) => (
						<TableRow key={invoice._id}>
							<TableCell className="font-medium">{invoice.cicle}</TableCell>
							<TableCell>{invoice.planType}</TableCell>
							<TableCell>{invoice.data}</TableCell>
							<TableCell className="">{invoice.validity > 0 ? `${invoice.validity} Days` : `Base Plan`}</TableCell>
							<TableCell className="">{invoice.description}</TableCell>
							<TableCell className="">
								<button onClick={() => selectPlan(invoice)} style={{ border:"1px solid #418dff"}} className="w-[100px] rounded text-blue-600">
									Rs. {invoice.price}
								</button>
								</TableCell>
						</TableRow>
					))}
				</TableBody>
		
			</Table>

		</div>
	)
}

export default RechargeTable