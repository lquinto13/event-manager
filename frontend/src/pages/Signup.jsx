import { useState } from 'react'
import Input from '../components/Input/Input'
import './Signup.css'
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
				confirm_password,
				username,
				address,
				contact_number,
			})
			if (signUser.data.success === true) {
				setValues({
					first_name: '',
					last_name: '',
					email: '',
					password: '',
					confirmPassword: '',
					username: '',
					address: '',
					contact_number: '',
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
				<h1>Sign Up</h1>
				<div className='form-box'>
					<div className='name-input'>
						<Input
							onChange={handleChange('first_name')}
							placeholder={'First Name'}
							value={first_name}
						/>
						<Input
							onChange={handleChange('last_name')}
							placeholder={'Last Name'}
							value={last_name}
						/>
					</div>
					<Input
						onChange={handleChange('email')}
						placeholder={'Email'}
						value={email}
					/>
					<Input
						onChange={handleChange('password')}
						placeholder={'Password'}
						type={'password'}
						value={password}
					/>
					<Input
						placeholder={'Confirm Password'}
						onChange={handleChange('confirm_password')}
						type={'password'}
						value={password}
					/>
					<Input
						onChange={handleChange('username')}
						placeholder={'Username'}
						value={username}
					/>

					<Input
						onChange={handleChange('address')}
						placeholder={'Address'}
						value={address}
					/>
					<Input
						onChange={handleChange('contact_number')}
						placeholder={'Contact Number'}
						type={'tel'}
						value={contact_number}
					/>
				</div>

				<button
					onClick={handleSubmit}
					className='btn-submit signup-button'>
					Register
				</button>
			</div>
		</div>
	)
}

export default Signup
