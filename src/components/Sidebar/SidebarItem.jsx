function SidebarItem({item}) {
	  const { label, icon: Icon } = item;

	return (
		<li className="nav-item">
			<Icon className="sidebar-icon" /> {label}
		</li>
	)
}

export default SidebarItem
