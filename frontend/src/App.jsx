import { useState } from 'react';
import CardImageResume from './components/card-image-resume';
import CardIsUploading from './components/card-is-uploading';
import CardUploader from './components/card-uploader';
import MainLayout from './components/layouts/main-layout';

function App() {
	return (
		<MainLayout>
			<CardUploader />
			<br />
			<br />
			<br />
			<br />
			<br />
			<CardIsUploading />
			<br />
			<br />
			<br />
			<br />
			<br />
			<CardImageResume />
		</MainLayout>
	);
}

export default App;
