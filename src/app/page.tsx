import dynamic from 'next/dynamic'
import About from './components/About'
import Education from './components/Education'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Proficiency from './components/Proficiency/Proficiency'
import Skills from './components/Skills/Skills'

export default function Home() {
	const DynamicProjects = dynamic<{}>(
		() => import('./components/Projects/Projects'),
		{
			ssr: false,
		}
	)
	return (
		<main className='min-h-screen'>
			<Header />
			<div className='mx-auto'>
				<About />
				<Skills />
				<Education />
				<Proficiency />
				<DynamicProjects />
				<Footer />
			</div>
		</main>
	)
}
