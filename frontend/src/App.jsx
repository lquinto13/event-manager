import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from '../src/components/ProtectedRoute/ProtectedRoute'
import EventDetails from './pages/EventDetails'
import { ToastContainer } from 'react-toastify'
import Overview from './pages/Overview'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRoute from './components/PublicRoute/PublicRoute'
import AppLayout from './components/AppLayout/AppLayout'

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
						 <Route element={<ProtectedRoute>	
								<AppLayout/>
							</ProtectedRoute>}>
    						<Route path="overview" element={<Overview />} />
    						<Route path="event-details/:id" element={<EventDetails />} />
  						</Route>
					
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
