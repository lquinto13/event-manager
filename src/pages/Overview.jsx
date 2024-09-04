import { Square2StackIcon } from '@heroicons/react/24/outline'
import './Overview.css'
import Card from '../components/Card/Card'
function Dashboard() {
	return (
		<main className="dashboard"> 
			<span className="title"> 
				<div className='title-icon-container'><Square2StackIcon className='title-icon'/></div> Overview
			</span>

			<div className='overview-container'>
				<Card> Total Events</Card>
				<Card> Incoming Events</Card>
				<Card> Past Events</Card>	
			</div>
		</main>

	)
}

export default Dashboard
