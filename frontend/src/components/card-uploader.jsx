import { useEffect, useRef, useState } from 'react';
import CardImagesList from './card-images-list';
import ImageHome from './icons/image-home';
import LastImage from './last-image';
import { useAppContext } from './providers/AppProvider';
import Button from './ui/Button';
import Card from './ui/card';
import CardTitle from './ui/card-title';

const CardUploader = () => {
	const inputFileRef = useRef();
	const [dragActive, setDragActive] = useState(false);
	const [imageFromLocal, setImageFromLocal] = useState('');
	const { handleFile } = useAppContext();

	const handleDrag = function (e) {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
			setDragActive(false);
		}
	};
	const handleChange = async e => {
		e.preventDefault();

		if (e.target.files && e.target.files[0]) {
			handleFile(e.target.files[0]);
		}
	};
	const handleDrop = async function (e) {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			handleFile(e.dataTransfer.files[0]);
		}
	};
	const onButtonClick = () => {
		inputFileRef.current.click();
	};

	useEffect(() => {
		setImageFromLocal(JSON.parse(localStorage.getItem('images')));
	}, []);

	console.log(imageFromLocal);

	return (
		<section className='md:flex gap-5 justify-center'>
			<Card>
				<div className='text-center'>
					<CardTitle>Upload your image</CardTitle>
					<p className='text-sm my-5 text-gray-400'>
						File must be jpeg, jpg, png...
					</p>
				</div>
				{dragActive && (
					<div
						className='w-full h-full absolute top-0 bottom-0 left-0 right-0'
						onDragEnter={handleDrag}
						onDragLeave={handleDrag}
						onDragOver={handleDrag}
						onDrop={handleDrop}
					></div>
				)}
				<div className='text-center'>
					<form
						className={`relative border-2 border-dashed border-sky-500 p-5 rounded-xl ${dragActive && 'bg-sky-700'}`}
						onDragEnter={handleDrag}
						onSubmit={e => e.preventDefault()}
					>
						<input
							className='hidden'
							type='file'
							name='file'
							accept='image/*'
							ref={inputFileRef}
							onChange={handleChange}
						/>
						<div className='img-container'>
							<ImageHome className='opacity-50' />
						</div>
						<div>
							<p className={`text-xl font-semibold ${!dragActive ? 'text-slate-600' : 'text-slate-100'} mb-5`}>
								Drag & Drop your image here
							</p>
						</div>
						{dragActive && (
							<div
								className='absolute w-full h-full top-0 bottom-0 left-0 right-0 '
								onDragEnter={handleDrag}
								onDragLeave={handleDrag}
								onDragOver={handleDrag}
								onDrop={handleDrop}
							></div>
						)}
					</form>
					<p className='my-8 text-center text-gray-400'>or</p>
					<Button type='button' onClick={onButtonClick}>
						Choose a file
					</Button>
				</div>
			</Card>
			{imageFromLocal && <CardImagesList images={imageFromLocal} />}
		</section>
	);
};

export default CardUploader;
