import './Sidebar.css'
import { BoltIcon, UserPlusIcon, UsersIcon, Cog6ToothIcon, UserGroupIcon, UserCircleIcon, Square2StackIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'
import SidebarItem from './SidebarItem.jsx'
import { useState } from 'react'


const sidebarNav = [ 
	{
		label: "Overview",
		icon: Square2StackIcon,
		route: "/dashboard",
		key: "dashboard"
	},
	{
		label: "Activity",
		icon: BoltIcon,
		route: "/activity",
		key: "activity"
	},
	{
		label: "Manage Events",
		icon: SquaresPlusIcon,
		route: "/events",
		key: "events"
	},
	{
		label: "Registration",
		icon: UserPlusIcon,
		route: "/registration",
		key: "registration"
	},
	{
		label: "Attendees",
		icon: UsersIcon,
		route: "/attendees",
		key: "attendees"
	},
	{
		label: "Contacts",
		icon: UserCircleIcon,
		route: "/contacts",
		key: "contacts"
	},
	{
		label: "Team Members",
		icon: UserGroupIcon,
		route: "/members",
		key: "members"
	},
	{
		label: "Settings",
		icon: Cog6ToothIcon,
		route: "/settings",
		key: "settings"
	},
]
function Sidebar() {
	const [activeNav, setIsActiveNav] = useState(null)

	return (
		<nav className="sidebar-container sidebar">
			<ul className='sidebar-item-container'>
				{sidebarNav.map((item) =>(
					<SidebarItem  key={item.key} item={item} activeNav={activeNav} setIsActiveNav={setIsActiveNav}/>
				))}
			</ul>
		</nav>
	)
}

export default Sidebar
