import React from 'react';

const Card = ({ children }) => {
	return (
		<div className='w-12/12 md:w-1/2 lg:w-1/3 mb-5 md:mb-0'>
			<div className='bg-white rounded-2xl shadow-xl p-8 sticky top-8 ' >{children}</div>
		</div>
	);
};

export default Card;
