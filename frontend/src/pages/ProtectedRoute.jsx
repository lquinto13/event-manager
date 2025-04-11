import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({ redirectPath = '/' }) {
	let isAuthenticated = false

	try {
		const token = JSON.parse(localStorage.getItem('token'))
		isAuthenticated = token?.success ?? false
	} catch (error) {
		console.error('Error parsing token:', error)
	}

	if (!isAuthenticated) {
		return (
			<Navigate
				to={redirectPath}
				replace
			/>
		)
	}
	return <Outlet />
}

export default ProtectedRoute
