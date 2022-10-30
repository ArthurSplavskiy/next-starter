import { CommonAction, CommonState } from '@Types/context/common';

export const commonReducer = (state: CommonState, action: CommonAction) => {
	switch (action.type) {
		case 'changeCurrency': {
			return { ...state, currency: action.currency };
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};
