'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
	{ id: 1, name: 'About', path: '/#about' },
	{ id: 2, name: 'Skills', path: '/#skills' },
	{ id: 3, name: 'Projects', path: '/#projects' },
	{ id: 4, name: 'Contacts', path: '/#contacts' },
]

const Header = () => {
	const [pathname, setPathname] = useState('/#about')
	const isActive = (path: string) => pathname === path
	return (
		<header className='flex justify-between bg-[#0A0A0A] px-40 py-4 shadow-[#060606] shadow-md drop-shadow-lg fixed w-full'>
			<Link
				href='/'
				className='text-rose-700 font-mono italic font-semibold text-xl'
				onClick={() => setPathname('/#about')}
			>
				V.Myronyuk
			</Link>
			<nav>
				<ul className='flex gap-10'>
					{navLinks.map(link => {
						return (
							<li key={link.id}>
								<Link
									href={link.path}
									onClick={() => setPathname(link.path)}
									className={
										isActive(link.path)
											? 'border-rose-700 border-b-[3px] text-white'
											: 'text-gray-300'
									}
								>
									{link.name}
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}

export default Header
