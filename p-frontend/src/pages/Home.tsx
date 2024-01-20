import React from 'react'
import Banner from '../components/homecomponents/Banner'
import BillOptions from '../components/homecomponents/BillOptions'
import OtherInfo from '../components/homecomponents/OtherInfo'

const Home = () => {
	return (
		<div>
			<Banner />
			<BillOptions />
			<OtherInfo/>
		</div>
	)
}

export default Home