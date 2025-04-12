import { useState } from 'react'
import Input from '../components/Input/Input'
import './Signup.css'
import beach from '../assets/beach-login.jpg'

import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function Signup() {
	const [values, setValues] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		confirmPassword: '',
		username: '',
		address: '',
		contact_number: '',
	})
	const navigate = useNavigate()

	const {
		first_name,
		last_name,
		email,
		password,
		confirm_password,
		username,
		address,
		contact_number,
	} = values

	const handleChange = (name) => (e) => {
		setValues({ ...values, [name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const signUser = await axios.post('/api/users/signup', {
				first_name,
				last_name,
				email,
				password,
			})
			if (signUser.data.success === true) {
				setValues({
					first_name: '',
					last_name: '',
					email: '',
					password: '',
				})
				toast.success('Sign up succesful')
				navigate('/')
			}
		} catch (err) {
			console.log(err.response.data.message)
			toast.error(err.response.data.message)
		}
	}

	return (
		<div className='signup-container'>
			<div className='signup-box'>
				<div className='signup-form'>
					<h1>Create Account</h1>
					<div className='signup-fields'>
						<div className='size'>
							<div className='name-fields'>
							<Input placeholder={"First Name"} onChange={handleChange('first_name')} value={first_name} />
							<Input placeholder={"Last Name"} onChange={handleChange('last_name')} value={last_name} />
							</div>
							
							<Input placeholder={"Email"} onChange={handleChange('email')} value={email} />
							<Input placeholder={"Password"} type={"password"} onChange={handleChange('password')} value={password}/>	
						</div>
											
					</div>
					<div className='sign-up-container'>
						<button className='sign-up' onClick={handleSubmit}>Sign Up</button>
					</div>
				</div>
				<img src={beach} className='login-photo'/>
								
			</div>
		</div>
	)
}

export default Signup
