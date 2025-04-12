import { useState } from 'react'
import Input from '../components/Input/Input'
import './Login.css'
import axios from 'axios'
import beach from '../assets/beach-login.jpg'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
	const [values, setValues] = useState({
		email: '',
		password: '',
	})

	const { email, password } = values
	const handleChange = (name) => (e) => {
		console.log(e.target.value)
		setValues({ ...values, [name]: e.target.value })
	}

	const handleSubmitLogin = async (e) => {
		e.preventDefault()
		try {
			const signIn = await axios.post('api/users/signin', {
				email,
				password,
			})
			if (signIn.data.success === true) {
				setValues({
					email: '',
					password: '',
				})
			}
			toast.success('Succesfully Login')
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
						<Input placeholder={"Email"} type={'text'} onChange={'email'} />
						<Input placeholder={"Password"} type={"password"} onChange={handleChange('password')}/>
						<div className='login-fields-sub'>
							<label>
      							<input type="checkbox"  name="remember"/> Remember me
    						</label>
							<span>Forgot Password?</span>
						</div>
					</div>
					<div className='sign-in-container'>
						<button className='sign-in'>Sign In</button>
						<span>Dont have an account? <NavLink to='signup'>Sign up</NavLink></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
