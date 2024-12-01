import { useEffect, useState } from 'react'
import { Moon, Sun } from './Icons'

export function ToggleButton() {
	const [isDarkMode, setIsDarkMode] = useState(false)

	useEffect(() => {
		const theme = localStorage.getItem('theme')
		console.log(theme)
		if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			window.document.documentElement.classList.add('dark')
			setIsDarkMode(true)
		}
	}, [])

	const handleClick = () => {
		if (isDarkMode) {
			window.document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		} else {
			localStorage.setItem('theme', 'dark')
			window.document.documentElement.classList.add('dark')
		}
		setIsDarkMode(!isDarkMode)
	}

	return (
		<button
			className="text-gray-200 bg-gray-700 hover:bg-gray-600   p-2 flex items-center justify-center rounded-md  transition-colors duration-300 absolute -top-24 right-0"
			onClick={handleClick}
			aria-label={`Toggle ${isDarkMode ? 'light' : 'dark'} mode`}>
			{isDarkMode ? <Sun /> : <Moon />}
		</button>
	)
}
