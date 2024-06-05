import Link from 'next/link'

const footerNav = [
	{ text: 'About', href: '/#about' },
	{ text: 'Skills', href: '/#skills' },
	{ text: 'Education', href: '/#education' },
	{ text: 'Proficiency', href: '/#proficiency' },
	{ text: 'Projects', href: '/#projects' },
	{ text: 'Contacts', href: '/#contacts' },
]

const FooterNavbar = () => {
	return (
		<div>
			<ul className='flex flex-col gap-3'>
				{footerNav.map((fnav, index) => (
					<li key={index} className='hover:text-customRose-900 transition-all'>
						<Link href={fnav.href}>{fnav.text}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FooterNavbar
