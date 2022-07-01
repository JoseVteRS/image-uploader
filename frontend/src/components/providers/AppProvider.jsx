import React from 'react';
import { AppContext } from '../../lib/contexts/AppContext';

const AppProvider = ({ children }) => {
	return (
		<AppContext.Provider
			value={{
				currentForm
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
