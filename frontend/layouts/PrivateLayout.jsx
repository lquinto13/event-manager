import { Outlet } from 'react-router-dom'
import Header from '../src/components/Header/Header'
import Sidebar from '../src/components/Sidebar/Sidebar'

function PrivateLayout() {
	return (
		<>
			<Header />
			<div className='main-content'>
				<Sidebar />
				<Outlet />
			</div>
		</>
	)
}

export default PrivateLayout
