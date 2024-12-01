import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Entrypoint } from './components/Entrypoint'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToggleButton } from './components/ToggleButton'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<main className="flex h-full  min-h-screen items-center justify-center py-32 bg-slate-50 dark:bg-gray-800 transition-colors duration-300 overflow-y-hidden ">
				<div className="max-w-5xl mx-auto relative">
					<ToggleButton />
					<Entrypoint />
				</div>
			</main>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App
