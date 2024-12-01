import { FC, useState } from 'react'
import { ListItem } from '../api/getListData'
import { DeleteButton, ExpandButton } from './Buttons'
import { ChevronDownIcon, ChevronUpIcon } from './Icons'

type CardProps = {
	title: ListItem['title']
	description: ListItem['description']
}

export const Card: FC<CardProps> = ({ title, description }) => {
	const [isVisible, setIsVisible] = useState(false)

	const handleShowInformation = () => {
		setIsVisible(is => !is)
	}

	return (
		<div className="border border-gray-800 px-2 py-1.5 dark:border-gray-600 min-w-[400px]">
			<div className="flex justify-between mb-0.5 items-center">
				<h1 className="font-medium text-gray-800 dark:text-gray-200">{title}</h1>
				<div className="flex">
					<ExpandButton onClick={handleShowInformation}>
						{isVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
					</ExpandButton>
					<DeleteButton />
				</div>
			</div>
			<p
				className={`text-sm text-gray-800 dark:text-gray-400 leading-6   ${
					isVisible ? 'h-full visible' : 'h-0 invisible'
				}`}>
				{description}
			</p>
		</div>
	)
}
