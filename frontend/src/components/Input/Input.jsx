import './Input.css'
import React, { useState } from 'react'

function Input({ placeholder, type, onChange, inputValue }) {
	const [value, setValue] = useState('')

	const handleChange = (e) => {
		setValue(e.target.value)
		onChange(e)
	}

	const hasContent = value.trim() !== ''
	return (
		<div className='input-container'>
			{type === 'tel' ? (
				<input
					type={type}
					className={`effect ${hasContent ? 'has-content' : ''}`}
					onChange={handleChange}
					value={inputValue}
					pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
				/>
			) : (
				<input
					type={type}
					className={`effect ${hasContent ? 'has-content' : ''}`}
					onChange={handleChange}
					value={inputValue}
				/>
			)}

			<label>{placeholder}</label>
			<span className='focus-border'></span>
		</div>
	)
}

export default Input
