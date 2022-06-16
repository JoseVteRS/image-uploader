import React from 'react';

const Button = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className='bg-sky-600 py-2 px-6 text-white font-bold rounded-md min-w-max focus:outline-none focus:shadow-md focus:outline-2 focus:outline-sky-700'
		>
			{children}
		</button>
	);
};

export default Button;
