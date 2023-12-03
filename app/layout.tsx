import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './nav'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Dashboard',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className='h-full bg-gray-100'>
			<body className={inter.className + ' h-full'}>
				<div className='max-h-full'>
					<Nav />
					<Header />
					<main className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
						{children}
					</main>
				</div>
			</body>
		</html>
	)
}
