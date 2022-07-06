import { useState } from 'react';
import { useAppContext } from '../../components/providers/AppProvider';

export const useUploadImage = () => {
	const { handleFile } = useAppContext();
	const [dragActive, setDragActive] = useState(false);

	const handleDrag = function (event) {
		event.preventDefault();
		event.stopPropagation();
		if (event.type === 'dragenter' || event.type === 'dragover') {
			setDragActive(true);
		} else if (event.type === 'dragleave') {
			setDragActive(false);
		}
	};

	const handleDrop = async function (event) {
		event.preventDefault();
		event.stopPropagation();
		setDragActive(false);

		if (event.dataTransfer.files && event.dataTransfer.files[0]) {
			handleFile(event.dataTransfer.files[0]);
		}
	};

	const handleChange = async event => {
		event.preventDefault();
		if (event.target.files && event.target.files[0]) {
			handleFile(event.target.files[0]);
		}
	};

	const onButtonClick = () => {
		inputFileRef.current.click();
	};

	return {
		dragActive,
		handleDrop,
		handleDrag,
		handleChange,
		onButtonClick
	};
};
