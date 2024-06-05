interface IProficiencyBar {
	name: string
	width: string
}

const ProficiencyBar = ({ name, width }: IProficiencyBar) => {
	return (
		<div className='flex flex-col gap-2'>
			<h2>{name}</h2>
			<div className='w-full bg-gray-400 dark:bg-[#181818] rounded-full h-3.5 '>
				<div className={`bg-rose-600 h-3.5 rounded-full ${width}`}></div>
			</div>
		</div>
	)
}

export default ProficiencyBar
