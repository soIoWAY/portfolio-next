import Link from 'next/link'
import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTelegramPlane,
} from 'react-icons/fa'

const socials = [
	{ icon: <FaGithub />, href: 'https://github.com/soIoWAY', al: 'github' },
	{
		icon: <FaInstagram />,
		href: 'https://www.instagram.com/xzvetal/',
		al: 'instagram',
	},
	{ icon: <FaTelegramPlane />, href: 'https://t.me/xzvetal', al: 'telegram' },
	{
		icon: <FaLinkedinIn />,
		href: 'https://www.linkedin.com/in/vitaliy-muronyuk-659b66245/',
		al: 'linkedin',
	},
]

const Socials = () => {
	return (
		<ul className='flex gap-5 text-2xl text-customRose-900'>
			{socials.map((social, index) => (
				<Link
					href={social.href}
					key={index}
					target='_blank'
					aria-label={social.al}
				>
					<li className='border p-2 rounded-full border-customRose-900 hover:bg-customRose-900 hover:text-[#0c0c0c] transition-all'>
						{social.icon}
					</li>
				</Link>
			))}
		</ul>
	)
}

export default Socials
