import CardUploader from './components/card-uploader';
import MainLayout from './components/layouts/main-layout';
import Navbar from './components/navbar';
import { AppProvider } from './components/providers/AppProvider';

function App() {
	return (
		<AppProvider>
			<MainLayout>
				<Navbar />
				<CardUploader />
			</MainLayout>
		</AppProvider>
	);
}

export default App;
