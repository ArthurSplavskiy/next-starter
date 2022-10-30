import { Currency } from '@Types/Shared';

export interface CommonState {
	currency: Currency;
}

export type CommonAction =
	| { type: 'changeCurrency'; currency: Currency }
	| { type: 'randomType'; data: string };

export type CommonDispatch = (action: CommonAction) => void;
