'use client'
// const slides = [
// 	{
// 		image: '/project1.jpg',
// 		text: 'test test tetefewg  gdsaa adsg dasg dsag dsa ',
// 	},
// 	{
// 		image: '/project2.jpg',
// 		text: 'test test tetefewg  gdsaa adsg dasg dsag dsa ',
// 	},
// 	{
// 		image: '/project3.jpg',
// 		text: 'test test tetefewg  gdsaa adsg dasg dsag dsa ',
// 	},
// ]

import { ProjectSwiper } from './ProjectsSwiper'

const Projects = () => {
	return (
		<div
			className='bg-[#0c0c0c] px-40 mx-auto flex flex-col items-center py-12'
			id='projects'
		>
			<h1 className='uppercase font-bold text-2xl border-b-4 border-rose-700'>
				Projects
			</h1>
			<div className='w-2/4 flex justify-center gap-20 mt-10'>
				<ProjectSwiper />
			</div>
		</div>
	)
}

export default Projects