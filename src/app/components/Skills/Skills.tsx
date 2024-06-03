import { BiLogoPostgresql } from 'react-icons/bi'
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5'
import { SiPrisma, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import Skill from './Skill'

interface Skill {
	icon: JSX.Element
	name: string
}

const skills: Skill[] = [
	{ icon: <FaHtml5 className='text-5xl fill-orange-600' />, name: 'HTML' },
	{ icon: <FaCss3Alt className='text-5xl fill-blue-600' />, name: 'CSS' },
	{
		icon: <SiTailwindcss className='text-5xl fill-cyan-400' />,
		name: 'Tailwind',
	},
	{
		icon: <IoLogoJavascript className='text-5xl fill-yellow-400 ' />,
		name: 'JavaScript',
	},
	{
		icon: <SiTypescript className='text-5xl fill-blue-700' />,
		name: 'TypeScript',
	},
	{ icon: <FaReact className='text-5xl fill-sky-400' />, name: 'React.js' },
	{ icon: <TbBrandNextjs className='text-5xl fill-black' />, name: 'Next.js' },
	{
		icon: <BiLogoPostgresql className='text-5xl fill-sky-700' />,
		name: 'PostgreSQL',
	},
	{ icon: <SiPrisma className='text-5xl fill-blue-950' />, name: 'Prisma' },
	{ icon: <FaGithub className='text-5xl fill-white' />, name: 'Github' },
	{ icon: <FaNodeJs className='text-5xl fill-green-500' />, name: 'Node.js' },
	{
		icon: <IoLogoFirebase className='text-5xl fill-yellow-400' />,
		name: 'Firebase',
	},
]

const Skills = () => {
	return (
		<div
			className='bg-[#0d0d0d] flex flex-col items-center justify-center py-12'
			id='skills'
		>
			<h1 className='uppercase font-bold text-2xl border-b-4 border-rose-700'>
				Skills
			</h1>
			<p className='text-base mt-6 w-9/12 sm:w-2/3 text-center'>
				I am from Ukraine and currently living in Lviv. I am doing Bachelor`s in
				Computer Science and I will graduate in the year 2025. I am Front-End
				developer and currently working as a freelancer.
			</p>
			<div className='mt-6 flex flex-wrap justify-center w-full sm:w-2/3 gap-3'>
				{skills.map((skill, index) => (
					<Skill key={index} icon={skill.icon} name={skill.name} />
				))}
			</div>
		</div>
	)
}

export default Skills
