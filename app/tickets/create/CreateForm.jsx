'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const CreateForm = () => {
	const router = useRouter()

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [priority, setPriority] = useState('low')
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)

		const ticket = { title, body, priority, user_email: 'john@gmail.com' }

		const response = await fetch('http://localhost:4000/tickets', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(ticket),
		})

		if (response.status === 201) {
			router.refresh()
			// 201 means created
			router.push('/tickets')
		}
	}

	return (
		<form onSubmit={handleSubmit} className='w-1/2'>
			<label>
				<span>Title:</span>
				<input
					required
					type='text'
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
			</label>
			<label>
				<span>Title:</span>
				<textarea required onChange={(e) => setBody(e.target.value)} value={body} />
			</label>
			<label>
				<span>Priority:</span>
				<select onChange={(e) => setPriority(e.target.value)} value={priority}>
					<option value='low'>Low Priority</option>
					<option value='medium'>Medium Priority</option>
					<option value='high'>High Priority</option>
				</select>
			</label>
			<button className='btn-primary' disabled={isLoading}>
				{isLoading && <span>Adding...</span>}
				{!isLoading && <span>Add Ticket</span>}
			</button>
		</form>
	)
}

export default CreateForm
