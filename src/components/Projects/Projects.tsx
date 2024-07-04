'use client'

import { projects } from '@/content/content'
import Image from 'next/image'
import Link from 'next/link'

type Project = {
	id: number
	name: string
	description: string
	imgSrc: string
	otherImages: Array<string>
}

const Projects = () => {
	return (
		<div
			className='bg-white dark:bg-[#0c0c0c] px-4 md:px-40 mx-auto flex flex-col items-center py-12 relative'
			id='projects'
		>
			<h1 className='uppercase font-bold text-2xl border-b-4 border-customRose-900'>
				Projects
			</h1>
			<div className='w-full flex flex-wrap justify-center gap-16 mt-10'>
				{projects.map(project => (
					<div className='relative group' key={project.id}>
						<Image
							src={project.imgSrc}
							width={400}
							height={400}
							alt={project.name}
						/>
						<div className='absolute inset-0 bg-[#0c0c0c] opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none'></div>
						<div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-2'>
							<h3 className='text-white text-2xl mb-2 font-semibold'>
								{project.name}
							</h3>
							<p>{project.description}</p>
							<Link
								href={`/projects#${project.id}`}
								className='bg-customRose-900 text-white py-2 px-4 rounded mt-2'
							>
								See More
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Projects
