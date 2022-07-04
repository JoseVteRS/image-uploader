import CardIsUploading from './components/card-is-uploading';
import CardUploader from './components/card-uploader';
import MainLayout from './components/layouts/main-layout';
import Navbar from './components/navbar';
import { AppProvider, useAppContext } from './components/providers/AppProvider';
import LandingPage from './Landing';

function App() {
	return (
		<AppProvider>
			<LandingPage />
		</AppProvider>
	);
}

export default App;
