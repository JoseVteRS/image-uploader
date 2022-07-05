import React from 'react';
import CardImageInfo from './card-image-info';
import CardImageResume from './card-image-resume';
import Card from './ui/card';
import CardTitle from './ui/card-title';

const CardImagesList = ({ images = [] }) => {
	console.log(images);

	return (
		<Card>
				<CardTitle>Last image uploaded</CardTitle>
				<div className='mt-12 bg-sky-200 rounded-md p-5 w-full shadow-md'>
					<div className=''>
						{images.length != 0 &&
							images.map(image => {
								return (
									<div className=' border-b-2 py-10 border-gray-50'>
										<div>
											<div className='w-12/12'>
												<img src={image.src} className='w-full rounded-md' />
											</div>

											<CardImageInfo image={image} />
										</div>

										<p className='text-slate-800 text-sm w-9/12 truncate'>
											{image.src}
										</p>
									</div>
								);
							})}
					</div>
				</div>
		
		</Card>
	);
};

export default CardImagesList;
