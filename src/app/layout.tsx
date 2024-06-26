import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Vitaliy Myronyuk - Web Developer',
	description:
		'Welcome to the portfolio of Vitaliy Myronyuk, a professional web developer specializing in creating stunning, responsive websites and applications.',
	keywords:
		'Vitaliy Myronyuk, web developer, web designer, portfolio, responsive design, web development, UI/UX design, next, react, frontend, fullstack',
	openGraph: {
		type: 'website',
		description:
			'Welcome to the portfolio of Vitaliy Myronyuk, a professional web developer specializing in creating stunning, responsive websites and applications.',
	},
	icons: {
		icon: ['/favicon.ico?v=4'],
		apple: ['/apple-touch-icon.png?v=4'],
		shortcut: ['/apple-touch-icon.png'],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<meta name='description' content={metadata.description!} />
				<meta name='author' content='Vitaliy Muronyuk' />
				<meta name='freelancehunt' content='4a8fc6beb3d301e' />
			</head>
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
