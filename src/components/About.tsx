import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'

const About = () => {
	return (
		<div
			id='about'
			className='flex flex-col items-center w-full bg-white dark:bg-[#0A0A0A] pt-20 pb-10 px-10 sm:px-20 md:px-40'
		>
			<div className='flex flex-col-reverse md:flex-row justify-between items-center'>
				<div className='w-full mt-6 md:mt-0 gap-2 md:w-1/2 flex flex-col'>
					<h1 className='text-customRose-900 text-4xl sm:text-3xl font-bold'>
						HI!
					</h1>
					<h2 className='font-bold text-3xl sm:text-2xl'>
						My name is{' '}
						<span className='text-customRose-900 tracking-wide'>
							Vitaliy Myronyuk
						</span>
					</h2>
					<p className='text-base'>
						I am a motivated and experienced Web developer with a degree from
						Lviv State University of Life Safety. I have a strong foundation in
						HTML5, CSS3, TailwindCSS, JavaScript, TypeScript, React, Next.js,
						Git, and Node.js. With a keen eye for detail and a passion for
						creating innovative and user-friendly websites, I have successfully
						implemented various projects throughout my career. My expertise in
						front-end development and proficiency in utilizing various tools and
						technologies make me a valuable asset to any team
					</p>
					<Link
						href='/#contacts'
						className='mt-12 bg-gradient-to-r from-rose-500 to-customRose-900 max-w-fit px-4 sm:px-3 py-2 rounded-sm'
					>
						Contact Me
					</Link>
				</div>
				<div className=''>
					<Image
						src='/about.jpg'
						alt='about'
						className='rounded-full'
						sizes='(max-width: 640px) 100vw, 400px'
						width={400}
						height={400}
						priority
					/>
				</div>
			</div>
			<div className='text-5xl mt-12'>
				<MdOutlineKeyboardDoubleArrowDown className='fill-customRose-900' />
			</div>
		</div>
	)
}

export default About
