import React from 'react';
import { CurrencyAPI, currencyAPIFactory } from './domain/currency-apis/currency-api-factory';
import { API } from './domain/currency-apis/common-api/api';

export class App extends React.Component {
	private readonly _api: API;

	public constructor(props: object) {
		super(props);

		this._api = currencyAPIFactory(CurrencyAPI.ExchangeRates);
	}

	public override render(): JSX.Element {
		return (
			<main>
				Hello world
			</main>
		);
	}
}
