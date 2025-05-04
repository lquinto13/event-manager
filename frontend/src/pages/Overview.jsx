import { Link, useNavigate } from 'react-router-dom'
import './Overview.css'
import {
	ExclamationCircleIcon
} from '@heroicons/react/24/outline'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
function Overview() {
	const eventArray =[
		{
			eventId: 147818499,
			eventName: "Mcdonalds Party",
			eventDescription: "Party at mcdonalds with the boys lets goooo minecraft",
			eventDate: "Friday, Jan 13 2025"
		}
	]

	const [events, setEvents] = useState(eventArray)
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
						{eventArray.map((event)=>(
						<Link to={`/event-details/${event.eventId}`}>
							<div className='content-cards'> 
								<div className='faux-image'> </div>
								<div className='cards-text'> 
									<span>{event.eventDate}</span>
									<h2>{event.eventName}</h2>
									<p>{event.eventDescription}</p> 
								</div>	
							</div>
						</Link>))}
					</div>
				}
			</div>
			<div className="fab-create-event"> + </div>
		</div>	
	)
}

export default Overview
