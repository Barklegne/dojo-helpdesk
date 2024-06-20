import React from 'react'
import TicketList from './TicketList'

const Tickets = () => {
	return (
		<main>
			<nav>
				<div>
					<div>
						<h2>Tickets</h2>
						<div>
							<small>Currently open tickets</small>
						</div>
					</div>
				</div>
			</nav>
			<TicketList />
		</main>
	)
}

export default Tickets
