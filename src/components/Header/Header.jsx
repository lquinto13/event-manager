import './Header.css'
import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
// import logo from '../../assets/text-logo-2.png'
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
function Header() {
	return (
		<header className='header-container'>
			<div className='logo-container'>
				<div className='logo logo-holder'>
					<a href=''>
						<h3>EVENTSYS</h3>
						<p>Lets Plan It</p>
					</a>
				</div>
			</div>
		
			<div className='user-account-container'>
				<div className='icon-container'>
					<BellIcon className="icon"/>		
				</div>
				<div className='user-avatar-container'>
					<p>Lance Quinto</p>
					<img className="user-avatar" src={FAKE_USER.avatar} />
					<ChevronDownIcon className='icon-chevron'/>
				</div>
				
				
			</div>
		</header>
	)
}

export default Header
