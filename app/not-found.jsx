import Link from 'next/link'
import React from 'react'

const NotFound = () => {
	return (
		<main className='text-center'>
			<h3 className='text-3xl'>There was a problem</h3>
			<p className='text-xl'>We could not found the page you are looking for </p>
			<p>
				Go back to the <Link href='/'>Dashboard</Link>{' '}
			</p>
		</main>
	)
}

export default NotFound
