import { educations } from '../content/content'

const Education = () => {
	return (
		<div
			className='bg-white dark:bg-[#0a0a0a] px-10 sm:px-20 md:px-40 mx-auto flex flex-col items-center py-12'
			id='education'
		>
			<h1 className='uppercase font-bold text-2xl border-b-4 border-customRose-900'>
				Education
			</h1>
			<div className='mt-6 flex flex-wrap justify-center w-full md:w-3/4 gap-3'>
				{educations.map((education, index) => (
					<div
						className='flex flex-col gap-6 w-full md:w-5/12 bg-gray-200 dark:bg-[#0c0c0c] shadow-black shadow-md dark:shadow-lg rounded-sm p-4'
						key={index}
					>
						<div className='flex items-center gap-4'>
							<div className='bg-white h-16 w-16 rounded-full text-3xl flex justify-center items-center'>
								{education.emoji}
							</div>
							<div className='flex flex-col gap-1'>
								<h2 className='text-rose-500 font-semibold'>
									{education.header}
								</h2>
								<p className='font-semibold'>{education.firstDescription}</p>
								<p className='text-sm'>{education.secondDescription}</p>
							</div>
						</div>
						<p className='text-sm'>{education.detailedDescription}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Education
