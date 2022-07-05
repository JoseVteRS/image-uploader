import { useState } from 'react';
import HeightIcon from './icons/height-icon';
import ImageIcon from './icons/image-icon';
import SizeIcon from './icons/size-icon';
import WidthIcon from './icons/width-icon';

const CardImageInfo = ({ image }) => {
	const bytesToMegaBytes = bytes => (bytes / 1048576).toFixed(2);
	return (
		<div className='bg-slate-100 p-3 rounded my-5 text-sm '>
			<p className='font-semibold mb-2 text-lg truncate'>{image.name.split('.')[0]}</p>

			<div className='flex items-center justify-between'>
				<p className='flex gap-2 items-center'>
					<ImageIcon className='w-3 h-3' />
					<span className='font-semibold uppercase'>{image.type}</span>
				</p>
				<p className='flex gap-2 items-center'>
					<span className='font-semibold'>
						{bytesToMegaBytes(image.size)} MB
					</span>
				</p>
				<p className='flex gap-2 items-center'>
					<span className='font-semibold'>
						{image.width} x {image.height}
					</span>
				</p>
			</div>
		</div>
	);
};

export default CardImageInfo;
