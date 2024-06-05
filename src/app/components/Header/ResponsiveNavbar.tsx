import Link from 'next/link'
import React from 'react'

interface NavLink {
	id: number
	name: string
	path: string
}

interface IResponsiveNavbar {
	isActive: (path: string) => boolean
	navLinks: NavLink[]
	setPathname: (pathname: string) => void
	setIsNavBarOpen: (isNavbarOpen: boolean) => void
	isNavbarOpen: boolean
}

const ResponsiveNavbar = ({
	isActive,
	navLinks,
	setPathname,
	setIsNavBarOpen,
	isNavbarOpen,
}: IResponsiveNavbar) => {
	return (
		<div>
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
										? 'border-customRose-900 border-b-[3px] text-white'
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
	)
}

export default ResponsiveNavbar
