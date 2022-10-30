export type HTMLElementEvent<T extends HTMLElement> = Event & {
	target: T;
};

export type Currency = 'USD' | 'EUR' | 'RUB' | 'UAH' | 'GBP' | 'BYN';
