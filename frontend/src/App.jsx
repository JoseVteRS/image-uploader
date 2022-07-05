import CardIsUploading from './components/card-is-uploading';
import CardUploader from './components/card-uploader';
import MainLayout from './components/layouts/main-layout';
import Navbar from './components/navbar';
import { AppProvider } from './components/providers/AppProvider';
import Footer from './components/ui/footer';
import LandingPage from './Landing';

function App() {
	return (
		<AppProvider>
			<Navbar />
			<MainLayout>
				<LandingPage />
			</MainLayout>
			<Footer />
		</AppProvider>
	);
}

export default App;
