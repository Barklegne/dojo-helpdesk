import Link from 'next/link'

const getTickets = async () => {
	// imitate a slow network request
	// await new Promise((resolve) => setTimeout(resolve, 3000))

	const response = await fetch('http://localhost:4000/tickets', {
		next: {
			// revalidate: 30, // Revalidate (refetch data) every 30 seconds

			revalidate: 0, // Disable revalidation meaning will not be refetch or cached
		},
	})
	const data = await response.json()
	return data
}

const TicketList = async () => {
	const tickets = await getTickets()
	return (
		<>
			{tickets.length === 0 ? (
				<p className='items-center'>No tickets available</p>
			) : (
				tickets.map((ticket) => (
					<Link href={`/tickets/${ticket.id}`} key={ticket.id}>
						<div className='card my-5' key={ticket.id}>
							<h3>{ticket.title}</h3>
							<p>{ticket.body.slice(0, 200)}...</p>
							<div className={`pill ${ticket.priority}`}>
								{ticket.priority} priority
							</div>
						</div>
					</Link>
				))
			)}
		</>
	)
}

export default TicketList
