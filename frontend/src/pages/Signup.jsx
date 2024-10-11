import { useState } from 'react'
import Input from '../components/Input/Input'
import './Signup.css'
import axios from 'axios'
function Signup() {
	const [values, setValues] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		username: '',
		address: '',
		contact_number: '',
	})

	const {
		first_name,
		last_name,
		email,
		password,
		username,
		address,
		contact_number,
	} = values

	const handleChange = (name) => (e) => {
		console.log(name)
		setValues({ ...values, [name]: e })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const signUser = await axios.post('/api/users/signup', {
				first_name,
				last_name,
				email,
				password,
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
					username: '',
					address: '',
					contact_number: '',
				})
			}
		} catch (err) {
			console.log(err)
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
						type={'number'}
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
