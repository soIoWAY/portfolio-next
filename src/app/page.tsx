import About from './components/About'
import Education from './components/Education'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Proficiency from './components/Proficiency/Proficiency'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

export default function Home() {
	return (
		<main className='min-h-screen'>
			<Header />
			<div className='mx-auto'>
				<About />
				<Skills />
				<Education />
				<Proficiency />
				<Projects />
				<Footer />
			</div>
		</main>
	)
}
