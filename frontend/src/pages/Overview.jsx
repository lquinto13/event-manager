import { useNavigate } from 'react-router-dom'
import './Overview.css'
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
import { useState } from 'react'
function Dashboard() {
	const [events, setEvents] = useState([23])
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
		<main className="dashboard"> 
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
					<div className='dashboard-content'>
						<input placeholder='Search Event'></input>
						<div className='content-filter'>
							<button className='filter-active'>Hosted Events</button>
							<button>Joined Events</button>
						</div>
						<div className='content-container'>
							{!events.length ? 
							<div className='empty-content'> 				
								<ExclamationCircleIcon className='empty-icon'/>
								<h2>There are no events here</h2>
							</div> : 
							<div className='content-cards-container'>  
								<div className='content-cards'> 
									<div className='faux-image'> </div>

									<div className='cards-text'> 
										<span>Friday January 13, 2025</span>
										<h2>My Event Name</h2>
										<p>Event description that people will put just for fun because i like writing things for description and making it long please continue</p> 
									</div>
									
								</div>
							</div>
							}
						</div>
					</div>
				</div>
			</div>
		
		</main>

	)
}

export default Dashboard
