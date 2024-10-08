import Input from '../components/Input/Input'
import './Login.css'
import { NavLink } from 'react-router-dom'

function Login() {
	return (
		<div className='login-container'>
			<div className='login-box'>
				<div className='login-logo-container'>
					<div className='login-logo login-logo-holder'>
						<a href=''>
							<h3>EVENTSYS</h3>
							<p>Lets Plan It</p>
						</a>
					</div>
				</div>
				<Input
					placeholder={'Email'}
					type={'text'}
				/>
				<Input
					placeholder={'Password'}
					type={'password'}
				/>

				<button
					className='btn-submit'
					type='submit'>
					Login
				</button>

				<div className='sign-up'>
					<p>
						Don't have an account?{' '}
						<NavLink to='/signup'>
							<span className='signup-click'> Sign Up Here</span>
						</NavLink>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Login
