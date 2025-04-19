import React, {useEffect, useState} from "react";
import {Navigate} from 'react-router-dom'
import axios from 'axios'

function ProtectedRoute({children}) {
	const [isAuthenticated, setIsAuthenticated] = useState(null);


	useEffect(()=>{
		axios.get('api/auth/checkAuth',{
			 withCredentials: true,
		})
		.then(() => setIsAuthenticated(true))
      	.catch(() => setIsAuthenticated(false));
	},[])

	if (isAuthenticated === null) {
		// You can show a loading spinner or nothing
		return "LOADINGG"
	}

	return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute
