// PublicRoute.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
	const [isAuthenticated, setIsAuthenticated] = useState(null);

	useEffect(() => {
		axios
			.get('/api/auth/checkAuth', {
				withCredentials: true,
			})
			.then(() => setIsAuthenticated(true))
			.catch(() => setIsAuthenticated(false));
	}, []);

	if (isAuthenticated === null) return null;

	return isAuthenticated ? <Navigate to="/overview" replace /> : children;
}

export default PublicRoute;