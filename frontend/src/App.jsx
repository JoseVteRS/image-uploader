import CardIsUploading from './components/card-is-uploading';
import CardUploader from './components/card-uploader';
import MainLayout from './components/layouts/main-layout';
import Navbar from './components/navbar';
import { AppProvider } from './components/providers/AppProvider';
import LandingPage from './Landing';

function App() {
	return (
		<AppProvider>
			<MainLayout>
				<LandingPage />
			</MainLayout>
		</AppProvider>
	);
}

export default App;
