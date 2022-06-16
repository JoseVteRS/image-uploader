import Card from './ui/card';
import CardTitle from './ui/card-title';
import style from './card-is-uploading.module.css';

const CardIsUploading = () => {
	return (
		<Card>
			<CardTitle>Uploading...</CardTitle>
			<div className='relative bg-gray-300 w-full h-2 rounded'>
				<div className={`${style.bar} bg-sky-600`}></div>
			</div>
		</Card>
	);
};

export default CardIsUploading;
