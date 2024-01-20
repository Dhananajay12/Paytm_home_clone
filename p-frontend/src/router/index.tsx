import { lazy } from "react"
// import ThankYouPage from "../pages/ThankYouPage.jsx"


const Home = lazy(() => import('../pages/Home.jsx'))
const Recharge = lazy(() => import('../pages/Recharge.js'))
const Electricity = lazy(() => import('../pages/Electricity.js'))
const Education = lazy(() => import('../pages/Education.js'))
const Metro = lazy(() => import('../pages/Metro.js'))
const Broadband = lazy(() => import('../pages/Broadband.js'))
const PaymentHistory = lazy(() => import('../pages/PaymentHistory.js'))






const coreRouter = [
	{
		path: '/',
		title: 'Home',
		component: Home,
		prot: false,
	},
	{
		path: '/recharge',
		title: 'recharge',
		component: Recharge,
		prot: false,
	},
	{
		path: '/electricity',
		title: 'electricity',
		component: Electricity,
		prot: false,
	},
	{
		path: '/eduction',
		title: 'education',
		component: Education,
		prot: false,
	},
	{
		path: '/broadband',
		title: 'broadband',
		component: Broadband,
		prot: false,
	},
	{
		path: '/metro',
		title: 'Metro',
		component: Metro,
		prot: false,
	},
	{
		path: '/payment-history',
		title: 'Payment-history',
		component: PaymentHistory,
		prot: false,
	},
]

const router = [...coreRouter];
export default router;