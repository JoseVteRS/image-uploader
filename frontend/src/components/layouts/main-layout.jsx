import React from 'react';

const MainLayout = ({ children }) => {
	return (
		<div className='container m-auto min-h-screen bg-neutral-200 flex flex-col items-center justify-center'>
			{children}
		</div>
	);
};

export default MainLayout;
