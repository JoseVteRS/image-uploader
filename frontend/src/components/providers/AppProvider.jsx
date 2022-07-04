import { useContext, useReducer } from 'react';
import {
	SUBMIT_IMAGE_BEGIN,
	SUBMIT_IMAGE_ERROR,
	SUBMIT_IMAGE_SUCCESS
} from '../../lib/contexts/actions';
import { AppContext } from '../../lib/contexts/AppContext';
import reducer from '../../lib/contexts/reducer';

const initialState = {
	isLoading: false,
	image: '',
	isDragActive: null,
	showAlert: false,
	alertType: '',
	alertText: ''
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleFile = async imageFile => {
		dispatch({ type: SUBMIT_IMAGE_BEGIN });
		const formData = new FormData();
		formData.append('id', crypto.randomUUID());
		formData.append('file', imageFile);

		try {
			const image = await fetch('http://localhost:3001/image-upload', {
				method: 'POST',
				body: formData
			});
			const imageData = await image.json();

			dispatch({ type: SUBMIT_IMAGE_SUCCESS, payload: { src: imageData.src } });

			localStorage.setItem('images', JSON.stringify(imageData.src));

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
