import CardUploader from './components/card-uploader';
import MainLayout from './components/layouts/main-layout';
import Navbar from './components/navbar';

function App() {
	return (
		<MainLayout>
			<Navbar />
			<CardUploader />
		</MainLayout>
	);
}

export default App;
