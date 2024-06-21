import { notFound } from 'next/navigation'

export const dynamicParams = true

export const generateStaticParams = async () => {
	const response = await fetch('http://localhost:4000/tickets')
	const tickets = await response.json()

	return tickets.map((ticket) => ({
		id: ticket.id,
	}))
}

const getTicket = async (id) => {
	// imitate a slow network request
	await new Promise((resolve) => setTimeout(resolve, 3000))

	const response = await fetch(`http://localhost:4000/tickets/${id}`)

	if (!response.ok) {
		// If the response is not OK, return a 404
		notFound()
	}
	return response.json() // Otherwise, return the ticket
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
