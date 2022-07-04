import React from 'react';
import CardImageResume from './components/card-image-resume';
import CardIsUploading from './components/card-is-uploading';
import CardUploader from './components/card-uploader';
import Navbar from './components/navbar';
import { useAppContext } from './components/providers/AppProvider';

const LandingPage = () => {
	const { isLoading, image } = useAppContext();

    if(isLoading) return <CardIsUploading />
    if(!isLoading && image) return <CardImageResume />
    else return <CardUploader />

};

export default LandingPage;
