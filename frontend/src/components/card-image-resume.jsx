import React from 'react';
import CheckIcon from './icons/check-icon';
import Button from './ui/Button';
import Card from './ui/card';
import CardTitle from './ui/card-title';

const CardImageResume = () => {
	return (
		<Card>
			<div className='flex flex-col items-center justify-center'>
				<CheckIcon className='fill-green-600 h-10 w-10' />
				<CardTitle>Uploaded successfully!</CardTitle>
			</div>

			<div className='rounded-2xl overflow-hidden'>
				<img src='/image.jpg' alt='Image uploaded' />
			</div>
			<div className='border-2 border-gray-300 bg-gray-100 w-full rounded-xl p-1 my-8 flex items-center justify-between'>
				<div className='w-8/12 overflow-hidden'>
					<p className='truncate mx-3 text-gray-800 font-semibold'>
						https://www.imageuploader.com/photo-from-pexels-jose-vte-ripoll.jpg
					</p>
				</div>
				<Button className='w-4/12' onClick={() => console.log('Copy Link')}>
					Copy link
				</Button>
			</div>
		</Card>
	);
};

export default CardImageResume;
