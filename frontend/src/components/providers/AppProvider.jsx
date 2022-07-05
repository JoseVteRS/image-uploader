import { useEffect, useState } from 'react';
import { useContext, useReducer } from 'react';
import {
	GET_IMAGES_FROM_LOCALSTORAGE,
	SUBMIT_IMAGE_BEGIN,
	SUBMIT_IMAGE_ERROR,
	SUBMIT_IMAGE_SUCCESS
} from '../../lib/contexts/actions';
import { AppContext } from '../../lib/contexts/AppContext';
import reducer from '../../lib/contexts/reducer';

const initialState = {
	isLoading: false,
	image: {},
	images:[],
	isDragActive: null,
	showAlert: false,
	alertType: '',
	alertText: ''
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [images, setImages] = useState([]);

	useEffect(() => {
		const imagesFromLocalstorage = localStorage.getItem('images');
		if (imagesFromLocalstorage) setImages(JSON.parse(imagesFromLocalstorage));
	}, []);

	useEffect(()=> {
		dispatch({
			type: GET_IMAGES_FROM_LOCALSTORAGE,
			payload:  JSON.parse(localStorage.getItem('images'))
		});
	}, [])

	const handleFile = async imageFile => {
		dispatch({ type: SUBMIT_IMAGE_BEGIN });
		const formData = new FormData();
		formData.append('id', crypto.randomUUID());
		formData.append('file', imageFile);

		try {
			const imageFetch = await fetch('http://localhost:3001/image-upload', {
				method: 'POST',
				body: formData
			});
			const imageData = await imageFetch.json();

			dispatch({ type: SUBMIT_IMAGE_SUCCESS, payload: { image: imageData  } });
			setImages(images.push(imageData));
			localStorage.setItem('images', JSON.stringify(images));
		} catch (error) {
			dispatch({ type: SUBMIT_IMAGE_ERROR, payload: { msg: error.message } });
		}
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				handleFile
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
