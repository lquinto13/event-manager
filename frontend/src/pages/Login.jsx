import { useState } from 'react'
import Input from '../components/Input/Input'
import './Login.css'
import axios from 'axios'
import beach from '../assets/beach-login.jpg'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

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
			if (data.success === true) {
				
			}
			if (data.success === true) {
				localStorage.setItem('token', JSON.stringify(data))
				toast.success('Succesfully Login')
				setValues({
					email: '',
					password: '',
				})
				navigate('/overview')

					
			}
		} catch (err) {
			console.log(err.response.data.message)
			toast.error(err.response.data.message)
		}
	}
	return (
		<div className='login-container'>
			<div className='login-box'>
				<img src={beach} className='login-photo'/>
					
				<div className='login-form'>
					<h1>Login</h1>
					
					<div className='login-fields'>
						<Input placeholder={"Email"} type={'text'} onChange={handleChange('email')} />
						<Input placeholder={"Password"} type={"password"} onChange={handleChange('password')}/>
						<div className='login-fields-sub'>
							<label>
      							<input type="checkbox"  name="remember"/> Remember me
    						</label>
							<span>Forgot Password?</span>
						</div>
					</div>
					<div className='sign-in-container'>
						<button className='sign-in' onClick={handleSubmitLogin}>Sign In</button>
						<span>Dont have an account? <NavLink to='signup'>Sign up</NavLink></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
