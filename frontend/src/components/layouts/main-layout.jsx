import React from 'react';

const MainLayout = ({ children }) => {
	return (
		<div className='min-h-screen relative container mx-auto w-full bg-slate-200 p-8'>
			{children}
		</div>
	);
};

export default MainLayout;
