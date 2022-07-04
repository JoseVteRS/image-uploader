import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import CheckIcon from './icons/check-icon';
import { useAppContext } from './providers/AppProvider';
import Button from './ui/Button';
import Card from './ui/card';
import CardTitle from './ui/card-title';

const CardImageResume = () => {
	const [isCopied, setIsCopied] = useState(false);
	const buttonCopyRef = useRef(null);
	const { image } = useAppContext();

	const toggleText = (text) => {
		navigator.clipboard.writeText(text);
		setIsCopied(!isCopied);
	};
	
	return (
		<Card>
			<div className='flex flex-col items-center justify-center'>
				<CheckIcon className='fill-green-600 h-10 w-10' />
				<CardTitle>Uploaded successfully!</CardTitle>
			</div>

			<div className='rounded-2xl overflow-hidden'>
				<img src={image || '/image.jpg'} alt='Image uploaded' />
			</div>
			<div className='border-2 border-gray-300 bg-gray-100 w-full rounded-xl p-1 my-8 flex items-center justify-between'>
				<div className='w-8/12 overflow-hidden'>
					<p className='truncate mx-3 text-gray-700' ref={buttonCopyRef}>
						{image}
					</p>
				</div>
				<Button className='w-4/12' onClick={(event) => toggleText(event.target.value)}>
					{isCopied ? 'Copied!!' : 'Copy link'}
				</Button>
			</div>
		</Card>
	);
};

export default CardImageResume;
