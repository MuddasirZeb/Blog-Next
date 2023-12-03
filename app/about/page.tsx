import { Metadata } from "next"

export const metadata: Metadata = {
	title: 'About',
	description: 'About',
}

export default function About() {
    return (
        <>
            <h1>Hello from About Page</h1>
        </>
    )
}