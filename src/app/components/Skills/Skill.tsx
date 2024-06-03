interface ISkill {
	icon: JSX.Element
	name: string
}

const Skill = ({ icon, name }: ISkill) => {
	return (
		<div className='flex justify-center gap-3 font-medium flex-col items-center bg-[#0a0a0a] rounded-md w-36 h-36'>
			{icon}
			<h3>{name}</h3>
		</div>
	)
}

export default Skill
