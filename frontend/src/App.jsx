import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Overview from './pages/Overview'

function App() {
	return (
	<>
		<Header />
		<div className='main-content'>
			<Sidebar />		
			<Overview /> 
		</div>
		
	</>
)}

export default App
