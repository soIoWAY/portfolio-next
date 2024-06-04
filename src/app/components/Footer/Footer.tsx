import Contacts from './Contacts'
import FooterNavbar from './FooterNavbar'
import Socials from './Socials'

const Footer = () => {
	return (
		<footer className='bg-[#0d0d0d]' id='contacts'>
			<div className='flex flex-col px-10 sm:px-20 md:px-40 mx-auto'>
				<div className='flex flex-col md:flex-row justify-between py-12'>
					<div className='flex flex-col gap-6 md:gap-12 w-1/2'>
						<div className='uppercase font-serif flex flex-col gap-1'>
							<h1 className='text-2xl'>
								<span className='text-rose-700'>Vitaliy</span> Myronyuk
							</h1>
							<p className='text-rose-700 text-sm'>Front-End Developer</p>
						</div>
						<div className='flex flex-col gap-1'>
							<h4 className='font-semibold'>Follow me</h4>
							<div>
								<Socials />
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-12 sm:gap-0 sm:flex-row mt-12 md:mt-0 justify-between w-full md:w-1/2'>
						<FooterNavbar />
						<div className='flex flex-col gap-2'>
							<h4 className='font-semibold'>Contact me</h4>
							<Contacts />
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
