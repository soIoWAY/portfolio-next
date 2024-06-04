import Link from 'next/link'
import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTelegramPlane,
} from 'react-icons/fa'

const socials = [
	{ icon: <FaGithub />, href: 'https://github.com/soIoWAY' },
	{ icon: <FaInstagram />, href: 'https://www.instagram.com/xzvetal/' },
	{ icon: <FaTelegramPlane />, href: 'https://t.me/xzvetal' },
	{
		icon: <FaLinkedinIn />,
		href: 'https://www.linkedin.com/in/vitaliy-muronyuk-659b66245/',
	},
]

const Socials = () => {
	return (
		<ul className='flex gap-5 text-2xl text-rose-700'>
			{socials.map((social, index) => (
				<Link href={social.href} key={index} target='_blank'>
					<li className='border p-2 rounded-full border-rose-700 hover:bg-rose-700 hover:text-[#0c0c0c] transition-all'>
						{social.icon}
					</li>
				</Link>
			))}
		</ul>
	)
}

export default Socials
