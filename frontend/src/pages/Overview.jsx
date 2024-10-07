import { Square2StackIcon } from '@heroicons/react/24/outline'
import './Overview.css'
import Card from '../components/Card/Card'
import EventsCard from '../components/Card/EventsCard'
function Dashboard() {
	return (
		<main className="dashboard"> 
			<span className="title"> 
				<div className='title-icon-container'><Square2StackIcon className='title-icon'/></div> <span>Overview</span>
			</span>

			<div className='overview-container'>
				<div className='metric-container'>
					<Card> Total Events</Card>
					<Card> Total Attendees</Card>
					<Card> Tickets Sold</Card>
					<Card> Revenue Generated</Card>	
				</div>
				

				<div className='events'>
					<h2>Upcoming Events</h2>
					<div className='events-container'>
						<EventsCard />
						<EventsCard />
						<EventsCard />
						<EventsCard />
					</div>			
				</div>
				<div className='events'>
					<h2>Past Events</h2>
					<div className='events-container'>
						<EventsCard />
						<EventsCard />
						<EventsCard />
						<EventsCard />
					</div>	

				</div>
			</div>
		</main>

	)
}

export default Dashboard
