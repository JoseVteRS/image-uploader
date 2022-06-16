import React from 'react';

const Card = ({ children }) => {
	return (
		<div className='w-11/12 md:w-1/2 lg:w-1/3'>
			<div className='bg-white rounded-2xl shadow-xl p-8'>{children}</div>
		</div>
	);
};

export default Card;
