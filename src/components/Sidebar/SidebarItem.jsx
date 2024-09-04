

function SidebarItem({item, activeNav, setIsActiveNav}) {
	const { label, icon: Icon, key } = item;

	const handleTabClick = (key) => {
		if (activeNav !== key) {
     		setIsActiveNav(key); // Update the active tab only if it's different
    	}		
  };

	return (
		<li 
			className={`nav-item ${activeNav === key ?'active': ''}`} 
			onClick={() => handleTabClick(key)}
		>
			<Icon className={`sidebar-icon ${activeNav === key ?'active-icon': ''}`} /> {label}
			
		</li>
	)
}

export default SidebarItem
