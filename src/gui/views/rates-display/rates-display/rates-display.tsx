import React, { useEffect, useState } from 'react';

import { CurrencyCode } from 'src/domain/models/rates/rates-view-model';
import { CurrencyRates } from 'src/domain/objects';
import { Loader } from 'src/gui/ui-kit/loader/loader';
import { Select } from 'src/gui/ui-kit/select/select';
import { CurrencyCard } from '../currency-card/currency-card';

import * as s from './rates-display.scss';

interface RatesDisplayProps {
	baseCurrency: string;
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

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchRates();
	}, [baseCurrency]);

	return (
		<div className={ s.ratesDisplay }>
			<h2>Currency Rates</h2>

			 <Select
			 	className={ s.baseCurrencySelect}
				options={ Object.values(CurrencyCode) }
				changeHandler={ handleCurrencySelectChange }
			/>

			{ isLoading
				? <Loader className={ s.rateLoader } />
				: <div className={ s.rates }>{ renderRates() }</div>
			}
		</div>
	);

	function renderRates(): JSX.Element[] {
		if (rates === null) {
			return [];
		}

		const rateCards = [];

		for (const currency in rates.rates) {
			rateCards.push(
				<CurrencyCard
					currency={ currency }
					rate={ rates.rates[currency] }
					key={ currency }
				/>
			);
		}

		return rateCards;
	}

	function handleCurrencySelectChange(event: React.ChangeEvent<HTMLSelectElement>): void {
		baseCurrencySelectionHandler(event.target.value);
	}

	async function fetchRates(): Promise<void> {
		setIsLoading(true);

		try {
			await getRates();
		} finally {
			setIsLoading(false);
		}
	}
}
