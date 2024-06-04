'use client'

import { ProjectSwiper } from './ProjectsSwiper'

const Projects = () => {
	return (
		<div
			className='bg-[#0c0c0c] px-4 md:px-40 mx-auto flex flex-col items-center py-12'
			id='projects'
		>
			<h1 className='uppercase font-bold text-2xl border-b-4 border-rose-700'>
				Projects
			</h1>
			<div className='w-full md:w-2/4 flex justify-center gap-20 mt-10'>
				<ProjectSwiper />
			</div>
		</div>
	)
}

export default Projects
