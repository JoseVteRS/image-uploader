import React from 'react';
import CardImageResume from './components/card-image-resume';
import CardIsUploading from './components/card-is-uploading';
import CardUploader from './components/card-uploader';
import MainLayout from './components/layouts/main-layout';
import Navbar from './components/navbar';
import { useAppContext } from './components/providers/AppProvider';

const LandingPage = () => {
	const { isLoading, image } = useAppContext();

	if (isLoading) return <CardIsUploading />;
	if (!isLoading && Object.keys(image).length !== 0) return <CardImageResume />;
	else return <CardUploader />;
};

export default LandingPage;
