import React from 'react';

import { CurrencyAPI, currencyAPIFactory } from './domain/currency-apis/currency-api-factory';
import { API } from './domain/currency-apis/common-api/api';
import { ConverterViewModel, IConverterViewModel } from './domain/models/converter-view-model';
import { ConverterControlContainer } from './gui/views/converter/converter-control-container';

export class App extends React.Component {
	private readonly _api: API;

	private readonly _converterModel: IConverterViewModel;

	public constructor(props: object) {
		super(props);

		this._api = currencyAPIFactory(CurrencyAPI.ExchangeRates);

		this._converterModel = new ConverterViewModel(this._api.getConvertCapability());
	}

	public override render(): JSX.Element {
		return (
			<main>
				<ConverterControlContainer model={ this._converterModel } />
			</main>
		);
	}
}
