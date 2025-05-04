import "./AppLayout.css"
import { Link, Outlet, useNavigate } from 'react-router-dom'
import {
	HomeIcon,
	UserIcon,
	BanknotesIcon,
	CogIcon,
	ChevronUpIcon,
	ExclamationCircleIcon
} from '@heroicons/react/24/outline'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'


function AppLayout() {
		const navigate = useNavigate()

	const handleLogout =  () => {
		 axios.get('api/auth/logout').then(result =>{
			toast.success("Logged Out Success")
			localStorage.removeItem('token')
			navigate('/')
			
		 }).catch(error =>{
			console.log(error)
		 })
				
	}
	return (
		<div className="dashboard">
			<div className='dashboard-border'>
				<div className='dashboard-container'>
					<div className='dashboard-sidebar'>
						<div className='sidebar-logo'>
							<h1>TARA<span>G</span></h1>
						</div>
						<div className='sidebar-nav'>
								<div className='sidebar-links'>
									<a className='links'><HomeIcon className='sidebar-icon'/>Dashboard</a>
									<a className='links'><UserIcon className='sidebar-icon'/>Circle</a>
									<a className='links'><BanknotesIcon className='sidebar-icon'/>Expenses</a>
									<a className='links'><CogIcon className='sidebar-icon'/>Settings</a>
								</div>
							</div>
						<button className='create-event' onClick={handleLogout}>Create Event</button>
						<div className='sidebar-account'>
							<div className='account-img'>
								<img></img>
							</div>
							<div className='account-name'>
								Lance Quinto
								<span>123@gmail.com</span>
							</div>
							<ChevronUpIcon className='chevron'/>
						</div>
					</div>
					<Outlet/>
			</div>
		</div>
		</div>
	)
}

export default AppLayout
