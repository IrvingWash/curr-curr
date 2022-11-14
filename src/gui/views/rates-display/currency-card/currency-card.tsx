import React from 'react';

import * as s from './currency-card.scss';

interface CurrencyCardProps {
	currency: string;
	rate: number;
}

export function CurrencyCard(props: CurrencyCardProps): JSX.Element {
	const { currency, rate } = props;

	return (
		<div className={ s.currencyCard }>
			<p className={ s.currency }>Currency: { currency }</p>
			<p className={ s.rate }>Rate: { rate }</p>
		</div>
	);
}
