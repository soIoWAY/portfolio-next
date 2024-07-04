import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

interface IProjectsLayout {
	children: React.ReactNode
}

export default function ProjectsLayout({ children }: IProjectsLayout) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
