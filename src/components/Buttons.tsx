import { FC } from 'react'
import { XMarkIcon } from './Icons'

type ButtonProps = React.ComponentProps<'button'>

export const ExpandButton: FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button
			className=" text-gray-800 dark:text-gray-200 hover:text-gray-400  transition-colors p-1 flex items-center justify-center"
			{...props}>
			{children}
		</button>
	)
}

export const DeleteButton: FC<Omit<ButtonProps, 'children'>> = props => {
	return (
		<button
			className=" text-red-500 hover:text-red-700 p-1  transition-colors flex items-center justify-center"
			{...props}>
			<XMarkIcon />
		</button>
	)
}

export const RenevalButton: FC<Omit<ButtonProps, 'children'>> = props => {
	return (
		<button
			className="text-white text-sm transition-colors hover:bg-gray-800 disabled:bg-black/75 bg-black rounded px-3 py-1"
			{...props}>
			Reveal
		</button>
	)
}
