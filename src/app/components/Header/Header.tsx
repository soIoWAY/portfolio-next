'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import Navbar from './Navbar'
import ResponsiveNavbar from './ResponsiveNavbar'

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
		<header className='flex justify-between bg-gray-100 dark:bg-[#0A0A0A] fixed px-10 sm:px-20 md:px-40 py-4 shadow-[#060606] shadow-sm dark:shadow-md drop-shadow-lg w-full items-center z-[9999]'>
			<Link
				href='/'
				className='text-customRose-900 font-mono italic font-semibold text-xl'
				onClick={() => setPathname('/#about')}
			>
				V.Myronyuk
			</Link>
			<Navbar
				navLinks={navLinks}
				isActive={isActive}
				setIsNavBarOpen={setIsNavBarOpen}
				isNavbarOpen={isNavbarOpen}
				setPathname={setPathname}
			/>

			<div
				className={`${styles.navbar} ${isNavbarOpen ? styles.navbarOpen : ''}`}
			>
				<ResponsiveNavbar
					navLinks={navLinks}
					isActive={isActive}
					setPathname={setPathname}
					setIsNavBarOpen={setIsNavBarOpen}
					isNavbarOpen={isNavbarOpen}
				/>
			</div>
		</header>
	)
}

export default Header
