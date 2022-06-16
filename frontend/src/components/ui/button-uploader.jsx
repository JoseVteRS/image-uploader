import React from 'react';

const ButtonUploader = ({ children }) => {
	return (
		<label className='bg-sky-600 py-2 px-6 text-white font-bold rounded-md focus:outline-none hover:shadow-md hover:outline-2 hover:outline-red-700'>
			{children}
		</label>
	);
};

export default ButtonUploader;
