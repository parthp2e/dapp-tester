import { useEffect } from 'react';
import { ApiKeySection } from './components/ApiKeySection';
import { HeaderActions } from './components/HeaderActions';
import { useApiKey } from './hooks/useApiKey';
import { KalpTransfer } from './components/KalpTransfer';

function App() {
	const { apiKey, isLoading, setApiKey, clearApiKey } = useApiKey();

	useEffect(() => {
		if (apiKey) {
			const renderMyWidget = (window as any).renderMyWidget;
			if (renderMyWidget) {
				renderMyWidget('my-widget-container', apiKey);
			} else {
				console.error('renderMyWidget is not defined');
			}
		}
	}, [apiKey]);

	// const handleFetchBalance = () => {
	//   console.log('triger')
	//   fetchWalletBalance();
	// };

	if (isLoading) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8 flex items-center justify-center">
				<div className="text-lg text-gray-600">Loading...</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
			<div className="max-w-md mx-auto">
				{!apiKey ? (
					<ApiKeySection onSubmit={setApiKey} />
				) : (
					<>
						<div id="my-widget-container"></div>
						<HeaderActions onDisconnect={clearApiKey} />
						<KalpTransfer />
						{/* <TransferSection /> */}
					</>
				)}
			</div>
		</div>
	);
}

export default App;
