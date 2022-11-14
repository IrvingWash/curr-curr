import React, { useEffect } from 'react';

import { CurrencyRates } from 'src/domain/objects';

interface RatesDisplayProps {
	baseCurrency: string | null;
	rates: CurrencyRates | null;
	getRates(): Promise<void>;
	baseCurrencySelectionHandler(baseCurrency: string): void;
}

export function RatesDisplay(props: RatesDisplayProps): JSX.Element {
	const {
		baseCurrency = 'RUB',
		rates,
		getRates,
		baseCurrencySelectionHandler,
	} = props;

	useEffect(() => {
		if (baseCurrency !== null) {
			getRates();
		}
	}, [baseCurrency]);

	return (
		<div>
			<h2>
				{ baseCurrency !== null
					? baseCurrency
					: 'Select base currency'
				}
			 </h2>

			 { renderRates() }
		</div>
	);

	function renderRates(): JSX.Element[] {
		if (rates === null) {
			return [];
		}

		const rateCards = [];

		for (const currency in rates.rates) {
			rateCards.push(
				<div key={ currency }>
					<p>Currency: { currency }</p>
					<p>Rate: { rates.rates[currency]}</p>
				</div>
			);
		}

		return rateCards;
	}
}
