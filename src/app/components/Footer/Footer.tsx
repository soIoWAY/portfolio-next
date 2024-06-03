import Link from 'next/link'
import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaPhoneAlt,
	FaTelegramPlane,
} from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const socials = [
	{ icon: <FaGithub /> },
	{ icon: <FaInstagram /> },
	{ icon: <FaTelegramPlane /> },
	{ icon: <FaLinkedinIn /> },
]

const footerNav = [
	{ text: 'About' },
	{ text: 'Skills' },
	{ text: 'Education' },
	{ text: 'Proficiency' },
	{ text: 'Projects' },
	{ text: 'Contacts' },
]

const Footer = () => {
	return (
		<footer className='bg-[#0d0d0d]' id='contacts'>
			<div className='flex flex-col px-40 mx-auto'>
				<div className='flex justify-between py-12'>
					<div className='flex flex-col gap-12 w-1/2'>
						<div className='uppercase font-serif flex flex-col gap-1'>
							<h1 className='text-2xl'>
								<span className='text-rose-700'>Vitaliy</span> Myronyuk
							</h1>
							<p className='text-rose-700 text-sm'>Front-End Developer</p>
						</div>
						<div className='flex flex-col gap-1'>
							<h4 className='font-semibold'>Follow me</h4>
							<div>
								<ul className='flex gap-5 text-2xl text-rose-700'>
									{socials.map((social, index) => (
										<Link href='/' key={index}>
											<li className='border p-2 rounded-full border-rose-700 hover:bg-rose-700 hover:text-[#0c0c0c] transition-all'>
												{social.icon}
											</li>
										</Link>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className='flex justify-between w-1/2'>
						<div>
							<ul className='flex flex-col gap-3'>
								{footerNav.map((fnav, index) => (
									<li
										key={index}
										className='hover:text-rose-700 transition-all'
									>
										<Link href='/'>{fnav.text}</Link>
									</li>
								))}
							</ul>
						</div>
						<div className='flex flex-col gap-2'>
							<h4 className='font-semibold'>Contact me</h4>
							<div>
								<ul className='flex flex-col gap-2'>
									<li>
										<Link href='/'>
											<div className='flex items-center gap-3'>
												<FaPhoneAlt className='fill-rose-700 text-xl' />
												<p>0688867089</p>
											</div>
										</Link>
									</li>
									<li>
										<Link href=''>
											<div className='flex items-center gap-3'>
												<IoMail className='fill-rose-700 text-xl' />
												<p>vitalikmur38@gmail.com</p>
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='text-center text-rose-700 border-t-2 border-t-rose-700 py-2'>
				<p>All rights reserved by the author</p>
			</div>
		</footer>
	)
}

export default Footer
