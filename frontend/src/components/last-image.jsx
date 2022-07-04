import React from 'react';
import Card from './ui/card';
import CardTitle from './ui/card-title';

const LastImage = ({ imageFromLocalUrl }) => {
	return (
		<div>
			<Card>
				<CardTitle>Last image uploaded</CardTitle>
				<div className='mt-12 bg-sky-200 rounded-md p-5 w-full shadow-md'>
					<div className='flex gap-2'>
						<img src={imageFromLocalUrl} className='w-3/12 rounded-md' />
						<p className='text-slate-800 text-sm w-9/12'>{imageFromLocalUrl}</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default LastImage;
