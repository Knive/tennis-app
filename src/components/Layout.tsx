import BackgroundImage from '../assets/img/background.jpg'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={`h-screen w-screen bg-cover bg-fixed overflow-y-auto`}
			style={{ backgroundImage: `url(${BackgroundImage})` }}
		>
			{children}
		</div>
	)
}