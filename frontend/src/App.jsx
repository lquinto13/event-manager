import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Login from './pages/Login'
import Signup from './pages/Signup'

import Overview from './pages/Overview'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
const pathsWithSidebarAndHeader = [
	'/dashboard',
	'/overview',
	'/settings',
	'/profile',
	'/reports',
]
const showHeaderAndSidebar = pathsWithSidebarAndHeader.includes(
	location.pathname
)

function App() {
	return (
		<BrowserRouter>
			<>
				{showHeaderAndSidebar && <Header />}
				<div className='main-content'>
					{showHeaderAndSidebar && <Sidebar />}
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
				</div>
			</>
		</BrowserRouter>
	)
}

export default App
