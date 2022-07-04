import { useRef, useState } from 'react';
import ImageIcon from './icons/image-icon';
import Button from './ui/Button';
import Card from './ui/card';
import CardTitle from './ui/card-title';

const CardUploader = () => {
	const inputFileRef = useRef();
	const [image, setImage] = useState({ preview: '', data: '' });

	const handleDragOver = event => event.preventDefault();
	const handleOnDragoverEvent = async event => {
		event.preventDefault();
		inputFileRef.current.files = event.dataTransfer.files;

		let formData = new FormData();
		formData.append('file', inputFileRef.current.files[0]);
		formData.append('id', crypto.randomUUID());
		await fetch('http://localhost:3001/image-upload', {
			method: 'POST',
			body: formData
		});

		// TODO: Cambiar vista card-uploading.tsx
	};

	const handleSubmit = async event => {
		event.preventDefault();
		let formData = new FormData();
		formData.append('file', image.data);
		formData.append('id', crypto.randomUUID());
		await fetch('http://localhost:3001/image-upload', {
			method: 'POST',
			body: formData
		});
	};

	const handleFileChange = e => {
		const img = {
			preview: URL.createObjectURL(e.target.files[0]),
			data: e.target.files[0]
		};
		setImage(img);
	};
	return (
		<Card>
			<div className='text-center'>
				<CardTitle>Upload your image</CardTitle>
				<p className='text-sm my-5 text-gray-400'>
					File must be jpeg, jpg, png...
				</p>
			</div>

			<div
				onDrop={handleOnDragoverEvent}
				onDragOver={event => handleDragOver(event)}
				className='border-2 rounded-2xl p-10 border-dashed border-sky-700 h-50 text-center bg-sky-100 flex flex-col items-center justify-center'
			>
				{image.preview ? (
					<img className='rounded mb-4' src={image.preview} />
				) : (
					<ImageIcon className='fill-sky-900 opacity-70 h-52 w-52' />
				)}

				<p className='text-gray-400'>Drag and Drop your image here</p>
			</div>

			<p className='my-8 text-center text-gray-400'>or</p>

			<div className='text-center'>
				<form onSubmit={handleSubmit}>
					{image.data ? (
						<Button type='submit'>Upload</Button>
					) : (
						<Button type='button'>
							<label>
								<input
									ref={inputFileRef}
									type='file'
									accept="image/png, image/jpeg, image/jpg"
									name='file'
									onChange={handleFileChange}
									className='hidden'
								></input>
								Select image
							</label>
						</Button>
					)}
				</form>
			</div>
		</Card>
	);
};

export default CardUploader;
