import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ToastContainer } from 'react-toastify'
import Overview from './pages/Overview'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<>
			<ToastContainer />
			<BrowserRouter>
				<Routes>
					
						<Route
							index
							element={<Login />}
						/>
						<Route
							path='signup'
							element={<Signup />}
						/>
						<Route
							path='dashboard'
							element={<Overview />}
						/>
					
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
