import { projects } from '@/content/content'
import Image from 'next/image'

export default function ProjectsPage() {
	return (
		<div className='pt-20 pb-10 flex flex-col items-center gap-10 bg-neutral-950'>
			{projects.map(projects => (
				<div
					key={projects.id}
					id={String(projects.id)}
					className='flex flex-col items-center gap-6 px-4 text-center'
				>
					<h1 className='text-3xl font-semibold border-b-4 border-customRose-900'>
						{projects.name}
					</h1>
					<p>{projects.description}</p>
					{projects.otherImages.map((image, index) => (
						<Image
							src={image}
							width={800}
							height={800}
							alt={projects.name}
							key={index}
							loading='lazy'
						/>
					))}
				</div>
			))}
		</div>
	)
}
