import { useState } from 'react'
import Input from '../components/Input/Input'
import './Login.css'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
	const [values, setValues] = useState({
		email: '',
		password: '',
	})
	const { email, password } = values
	const navigate = useNavigate()

	const handleChange = (name) => (e) => {
		console.log(e.target.value)
		setValues({ ...values, [name]: e.target.value })
	}

	const handleSubmitLogin = async (e) => {
		e.preventDefault()
		try {
			const { data } = await axios.post('api/auth/signin', {
				email,
				password,
			})
			console.log(email, password)
			if (data.success === true) {
				setValues({
					email: '',
					password: '',
				})
			}
			if (data.success === true) {
				toast.success('Succesfully Login')
				navigate('/overview')
				if (typeof window !== 'undefined')
					localStorage.setItem('token', JSON.stringify(data))
			}
		} catch (err) {
			console.log(err.response.data.message)
			toast.error(err.response.data.message)
		}
	}
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
					onChange={handleChange('email')}
					type={'text'}
				/>
				<Input
					placeholder={'Password'}
					onChange={handleChange('password')}
					type={'password'}
				/>

				<button
					className='btn-submit'
					onClick={handleSubmitLogin}>
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
