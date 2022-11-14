import React from 'react';
import { CurrencyAPI, currencyAPIFactory } from './domain/currency-apis/currency-api-factory';
import { API } from './domain/currency-apis/common-api/api';
import { ConverterFormControlContainer } from './gui/views/converter-form/converter-form-control-container';
import { ConverterViewModel, IConverterViewModel } from './domain/models/converter-view-model';

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
				<ConverterFormControlContainer model={ this._converterModel } />
			</main>
		);
	}
}
