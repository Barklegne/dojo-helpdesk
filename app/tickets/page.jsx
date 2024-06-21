import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../Loading'

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
			<Suspense fallback={<Loading />}>
				<TicketList />
			</Suspense>
		</main>
	)
}

export default Tickets
