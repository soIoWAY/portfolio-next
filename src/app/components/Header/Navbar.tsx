import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'

interface NavLink {
	id: number
	name: string
	path: string
}

interface INavbar {
	navLinks: NavLink[]
	isActive: (path: string) => boolean
	setPathname: (pathname: string) => void
	setIsNavBarOpen: (isNavbarOpen: boolean) => void
	isNavbarOpen: boolean
}

const Navbar = ({
	navLinks,
	isActive,
	setPathname,
	setIsNavBarOpen,
	isNavbarOpen,
}: INavbar) => {
	return (
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
	)
}

export default Navbar
