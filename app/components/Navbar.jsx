import Link from 'next/link'
import React from 'react'
import DojoLogo from './dojo-logo.png'
import Image from 'next/image'

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<Image
				src={DojoLogo}
				alt='Dojo Logo'
				width={70}
				placeholder='blur'
				quality={100}
			/>
			<Link href='/'> Dashboard </Link>
			<Link href='/tickets'> Tickets </Link>
		</nav>
	)
}

export default Navbar
