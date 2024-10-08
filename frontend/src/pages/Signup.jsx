import Input from '../components/Input/Input'
import './Signup.css'

function Signup() {
	return (
		<div className='signup-container'>
			<div className='signup-box'>
				<h1>Sign Up</h1>
				<Input placeholder={'Email'} />
				<Input
					placeholder={'Password'}
					type={'password'}
				/>
				<Input
					placeholder={'Confirm Password'}
					type={'password'}
				/>
				<Input placeholder={'Username'} />

				<Input placeholder={'First Name'} />
				<Input placeholder={'Last Name'} />

				<Input placeholder={'Address'} />
				<Input
					placeholder={'Contact Number'}
					type={'number'}
				/>
				<button
					className='btn-submit signup-button'
					type='submit'>
					Sign up
				</button>
			</div>
		</div>
	)
}

export default Signup
