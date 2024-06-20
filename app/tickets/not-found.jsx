import Link from 'next/link'
import React from 'react'

const NotFound = () => {
	return (
		<main className='text-center'>
			<h3 className='text-3xl'>We hit a brick wall.. </h3>
			<p className='text-xl'>We could not found the ticket you were looking for</p>
			<p>
				Go back to all <Link href='/tickets'>tickets</Link>
			</p>
		</main>
	)
}

export default NotFound
