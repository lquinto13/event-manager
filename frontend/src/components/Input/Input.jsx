import './Input.css'
import React, { useState } from 'react'

function Input({ placeholder, type, onChange, inputValue }) {
	const [value, setValue] = useState('')

	const handleChange = (e) => {
		setValue(e.target.value)
		onChange(e.target.value)
	}

	const hasContent = value.trim() !== ''
	return (
		<div className='input-container'>
			<input
				type={type}
				className={`effect ${hasContent ? 'has-content' : ''}`}
				onChange={handleChange}
				value={inputValue}
			/>
			<label>{placeholder}</label>
			<span className='focus-border'></span>
		</div>
	)
}

export default Input
