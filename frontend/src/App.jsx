import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import PublicLayout from '../layouts/PublicLayout'
import PrivateLayout from '../layouts/PrivateLayout'

import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './pages/ProtectedRoute'
import { ToastContainer } from 'react-toastify'
import Overview from './pages/Overview'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<>
			<ToastContainer />
			<BrowserRouter>
				<Routes>
					<Route element={<PublicLayout />}>
						<Route
							index
							element={<Login />}
						/>
						<Route
							path='signup'
							element={<Signup />}
						/>
					</Route>

					<Route element={<ProtectedRoute />}>
						<Route element={<PrivateLayout />}>
							<Route
								path='dashboard'
								element={<Overview />}
							/>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
