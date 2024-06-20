import React from 'react'

const getTicket = async (id) => {
	const response = await fetch(`http://localhost:4000/tickets/${id}`)
	return response.json()
}

const TicketDetails = async ({ params }) => {
	const ticket = await getTicket(params.id)
	return (
		<main>
			<nav>
				<h2>Ticket Details</h2>
			</nav>
			<div className='card'>
				<h3>{ticket.title}</h3>
				<p>{ticket.body}</p>
				<div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
			</div>
		</main>
	)
}

export default TicketDetails
