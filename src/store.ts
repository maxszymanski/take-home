import { create } from 'zustand'

type State = {
	isDark: boolean
}

type Actions = {
	setIsDark: () => void
}

export const useAppStore = create<State & Actions>(set => ({
	isDark: false,
	setIsDark: () => {
		set(state => ({ isDark: !state.isDark }))
	},
}))
