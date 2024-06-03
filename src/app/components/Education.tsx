const Education = () => {
	return (
		<div className='bg-[#0a0a0a] px-10 sm:px-20 md:px-40 mx-auto flex flex-col items-center py-12'>
			<h1 className='uppercase font-bold text-2xl border-b-4 border-rose-700'>
				Education
			</h1>
			<div className='mt-6 flex flex-wrap justify-center w-full md:w-3/4 gap-3'>
				<div className='flex flex-col gap-6 w-full md:w-5/12 bg-[#0c0c0c] shadow-black shadow-lg rounded-sm p-4'>
					<div className='flex items-center gap-4'>
						<div className='bg-white h-16 w-16 rounded-full text-3xl flex justify-center items-center'>
							🔥
						</div>
						<div className='flex flex-col gap-1'>
							<h2 className='text-rose-500 font-semibold'>
								University of Life Safety
							</h2>
							<p className='font-semibold'>Bachelor of Computer Science</p>
							<p className='text-sm'>September 2021 - June 2025</p>
						</div>
					</div>
					<p className='text-sm'>
						While studying at the University of Life Safety, I gained through
						knowledge and skills in the field of computer science such as
						programming, algorithms, databases, teamwork skills.
					</p>
				</div>
				<div className='flex flex-col gap-6 w-full md:w-5/12 bg-[#0c0c0c] shadow-black shadow-lg rounded-sm p-4'>
					<div className='flex items-center gap-4'>
						<div className='bg-white h-16 w-16 rounded-full text-3xl flex justify-center items-center'>
							👨‍💻
						</div>
						<div className='flex flex-col gap-1'>
							<h2 className='text-rose-500 font-semibold'>
								NIX | Front-End/JavaScript
							</h2>
							<p className='font-semibold'>Online JS Course</p>
							<p className='text-sm'>June 2023 - September 2023</p>
						</div>
					</div>
					<p className='text-sm'>
						During my studies, I consolidated my knowledge of JavaScript,
						learned the basic principles of OOP, got acquainted with libraries
						and frameworks. Consolidated all skills with practical tasks.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Education
