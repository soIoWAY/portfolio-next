'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import styles from './Header.module.css'

const navLinks = [
	{ id: 1, name: 'About', path: '/#about' },
	{ id: 2, name: 'Skills', path: '/#skills' },
	{ id: 3, name: 'Projects', path: '/#projects' },
	{ id: 4, name: 'Contacts', path: '/#contacts' },
]

const Header = () => {
	const [pathname, setPathname] = useState('/#about')
	const isActive = (path: string) => pathname === path
	const [isNavbarOpen, setIsNavBarOpen] = useState(false)

	useEffect(() => {
		if (isNavbarOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isNavbarOpen])

	return (
		<header className='flex justify-between bg-[#0A0A0A] fixed px-10 sm:px-20 md:px-40 py-4 shadow-[#060606] shadow-md drop-shadow-lg w-full items-center z-[9999]'>
			<Link
				href='/'
				className='text-rose-700 font-mono italic font-semibold text-xl'
				onClick={() => setPathname('/#about')}
			>
				V.Myronyuk
			</Link>
			<nav>
				<ul className='hidden sm:flex gap-10'>
					{navLinks.map(link => (
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
					))}
				</ul>
				<button
					className='block sm:hidden text-xl'
					onClick={() => setIsNavBarOpen(!isNavbarOpen)}
				>
					<RxHamburgerMenu />
				</button>
			</nav>

			<div
				className={`${styles.navbar} ${isNavbarOpen ? styles.navbarOpen : ''}`}
			>
				<div className='flex justify-end pt-3 pr-4 text-white'>
					<button
						className='border px-2 rounded-md'
						onClick={() => setIsNavBarOpen(!isNavbarOpen)}
					>
						X
					</button>
				</div>
				<div
					className='text-white flex flex-col text-left items-center bg-black h-screen overflow-y-hidden opacity-90'
					onClick={() => setIsNavBarOpen(!isNavbarOpen)}
				>
					<ul className='flex items-center mt-32 h-full flex-col gap-6 text-2xl'>
						{navLinks.map(link => (
							<li key={link.id}>
								<Link
									href={link.path}
									onClick={(e: React.MouseEvent) => {
										e.stopPropagation()
										setPathname(link.path)
									}}
									className={
										isActive(link.path)
											? 'border-rose-700 border-b-[3px] text-white'
											: 'text-gray-300'
									}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
