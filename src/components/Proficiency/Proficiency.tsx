import ProficiencyBar from './ProficiencyBar'

interface IProficiencies {
	name: string
	width: string
}

const proficiencies: IProficiencies[] = [
	{ name: 'HTML', width: 'w-[100%]' },
	{ name: 'CSS', width: 'w-[100%]' },
	{ name: 'Tailwind', width: 'w-[90%]' },
	{ name: 'JavaScript', width: 'w-[92%]' },
	{ name: 'TypeScript', width: 'w-[85%]' },
	{ name: 'React.js', width: 'w-[82%]' },
	{ name: 'Next.js', width: 'w-[73%]' },
	{ name: 'PostgreSQL', width: 'w-[85%]' },
]

const Proficiency = () => {
	return (
		<div
			className='bg-gray-200 dark:bg-[#0d0d0d] px-10 sm:px-20 md:px-40 mx-auto flex flex-col items-center py-12'
			id='proficiency'
		>
			<h1 className='uppercase font-bold text-2xl border-b-4 border-customRose-900'>
				Proficiency
			</h1>
			<div className='w-full flex justify-center gap-20 mt-10'>
				<div className='flex flex-wrap flex-col w-full md:w-7/12 gap-6 h-64'>
					{proficiencies.map((prof, index) => (
						<ProficiencyBar name={prof.name} width={prof.width} key={index} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Proficiency
