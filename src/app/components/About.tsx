import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'

const About = () => {
	return (
		<div
			id='about'
			className='flex flex-col items-center w-full bg-[#0A0A0A] pt-20 pb-10 px-10 sm:px-20 md:px-40'
		>
			<div className='flex flex-col-reverse md:flex-row justify-between items-center'>
				<div className='w-full mt-6 md:mt-0 gap-2 md:w-1/2 flex flex-col'>
					<h1 className='text-rose-700 text-3xl font-bold'>HI!</h1>
					<h2 className='font-bold text-2xl'>
						My name is
						<span className='text-rose-700 tracking-wide'>
							Vitaliy Myronyuk
						</span>
					</h2>
					<p className='text-base'>
						I am from Ukraine and currently living in Lviv. I am doing
						Bachelor`s in Computer Science and I will graduate in the year 2025.
						I am Front-End developer and currently working as a freelancer.
					</p>
					<Link
						href='/#contacts'
						className='mt-12 bg-gradient-to-r from-rose-500 to-rose-800 max-w-fit px-3 py-2 rounded-sm'
					>
						Contact Me
					</Link>
				</div>
				<div className='flex justify-center items-center'>
					<Image
						src='/about.jpg'
						alt='about'
						width={400}
						height={400}
						className='rounded-full'
					/>
				</div>
			</div>
			<div className='text-5xl mt-12'>
				<MdOutlineKeyboardDoubleArrowDown className='fill-rose-700' />
			</div>
		</div>
	)
}

export default About
