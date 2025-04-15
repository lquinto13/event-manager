import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from '../src/components/ProtectedRoute/ProtectedRoute'

import { ToastContainer } from 'react-toastify'
import Overview from './pages/Overview'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRoute from './components/PublicRoute/PublicRoute'

function App() {
	return (
		<>
			<ToastContainer />
			<BrowserRouter>
				<Routes>
					
						<Route
							index
							element={
								<PublicRoute>
									<Login />
								</PublicRoute>
							}
						/>
						<Route
							path='signup'
							element={
								<PublicRoute>
									<Signup />
								</PublicRoute>
								}
						/>
						<Route
							path='overview'
							  element={
            						<ProtectedRoute>
										<Overview />
            						</ProtectedRoute>
          						} 
						/>
					
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
