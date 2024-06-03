'use client'

import Link from 'next/link'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

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
		<header className='flex justify-between bg-[#0A0A0A] fixed px-10 sm:px-20 md:px-40 py-4 shadow-[#060606] shadow-md drop-shadow-lg w-full items-center'>
			<Link
				href='/'
				className='text-rose-700 font-mono italic font-semibold text-xl'
				onClick={() => setPathname('/#about')}
			>
				V.Myronyuk
			</Link>
			<nav>
				<ul className='hidden sm:flex gap-10'>
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
				<div className='block sm:hidden text-xl'>
					<RxHamburgerMenu />
				</div>
			</nav>
		</header>
	)
}

export default Header
