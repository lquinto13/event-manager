import { NavLink } from 'react-router-dom'

function SidebarItem({ item, activeNav, setIsActiveNav }) {
	const { label, icon: Icon, key, route } = item

	const handleTabClick = (key) => {
		if (activeNav !== key) {
			setIsActiveNav(key) // Update the active tab only if it's different
		}
	}

	return (
		<li>
			<NavLink
				to={`${route}`}
				className='nav-item'
				onClick={() => handleTabClick(key)}>
				<Icon
					className={`sidebar-icon ${activeNav === key ? 'active-icon' : ''}`}
				/>
				{label}
			</NavLink>
		</li>
	)
}

export default SidebarItem
