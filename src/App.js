import './App.css';
import Characters from './components/Characters';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
	const queryClient = new QueryClient();
	return (
		<div className="App bg-[#3c3c3c] p-10">
			<QueryClientProvider client={queryClient}>
				<Characters />
			</QueryClientProvider>
		</div>
	);
}

export default App;
