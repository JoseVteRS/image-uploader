import React, { useRef } from 'react';
import ImageIcon from './icons/image-icon';
import Button from './ui/Button';
import ButtonUploader from './ui/button-uploader';
import Card from './ui/card';
import CardTitle from './ui/card-title';

const CardUploader = () => {
	const inputFileRef = useRef();

	const handleOnDropEvent = event => {
		event.preventDefault();

		inputFileRef.current.files = event.dataTransfer.files;
		console.log({ files: event.dataTransfer.files });
		// btnSubmitRef.current.click();
	};
	const handleOnDragoverEvent = event => event.preventDefault();

	return (
		<Card>
			<div className='text-center'>
				<CardTitle>Upload your image</CardTitle>
				<p className='text-sm my-5 text-gray-400'>
					File must be jpeg, jpg, png...
				</p>
			</div>

			<div
				onDrop={handleOnDropEvent}
				onDragOver={handleOnDragoverEvent}
				className='border-2 rounded-2xl p-10 border-dashed border-sky-700 h-50 text-center bg-sky-100'
			>
				<ImageIcon className='fill-sky-900 opacity-70' />
				<p className='text-gray-400'>Drag and Drop your image here</p>
			</div>

			<p className='my-8 text-center text-gray-400'>or</p>

			<div className='text-center'>
				<ButtonUploader>
					<input
						ref={inputFileRef}
						type='file'
						name='fileName'
						id='fileName'
						className='hidden'
					/>
					Choose file
				</ButtonUploader>
			</div>
		</Card>
	);
};

export default CardUploader;
