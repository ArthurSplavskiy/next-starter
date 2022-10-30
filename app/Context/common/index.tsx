/**
 * For more information about this structure
 * see: https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */

import React, { useContext, createContext, useReducer, ReactNode } from 'react';
import { CommonDispatch, CommonState } from '@Types/context/common';
import { Currency } from '@Types/Shared';
import { commonReducer } from '@Context/common/CommonReducer';

type CommonProviderProps = { currency: Currency; children: ReactNode };

const CommonContext = createContext<{ state: CommonState; dispatch: CommonDispatch } | undefined>(
	undefined
);

const CommonProvider = ({ currency, children }: CommonProviderProps) => {
	const [state, dispatch] = useReducer(commonReducer, { currency });
	const value = { state, dispatch };

	return <CommonContext.Provider value={value}>{children}</CommonContext.Provider>;
};

const useCommonContext = () => {
	const context = useContext(CommonContext);

	if (context === undefined) {
		throw new Error('useCommonContext must be used within a CommonProvider');
	}

	return context;
};

export { CommonProvider, useCommonContext };
