
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
// import Navbar from './components/Navbar'
// import Banner from './components/homepage/Banner'
import { Suspense } from 'react'
import DefualtLayout from './layout/DefualtLayout'
import router from './router'


let cureentUser = false;

const RequireAuth = ({ children }: any) => {

	// const currentFont = useSelector((state) => state.userReducer.userLoginInfo.token);
	const currentFont = true;
	if (currentFont) {
		cureentUser = true;
	}
	else {
		// tostError("Please Login")
		return <Navigate to="/" />
	}
	return cureentUser ? children : <Navigate to="/" />
}


function App() {

	return (
		<>
			<Routes>
				<Route element={<DefualtLayout />}>
					{router.map(({ path, component: Component, prot }, index) => (
						<Route
							key={index}
							path={path}
							element={
								<Suspense fallback={<p>Loading...</p>}>
									{prot ? <RequireAuth>  <Component /> </RequireAuth> : <Component />}
								</Suspense>
							}
						/>
					))}
				</Route>
				{/* <Route element={<NotFoundPage />} /> */}
			</Routes>

		</>
	)
}

export default App
