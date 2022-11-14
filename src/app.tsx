import React from 'react';

import {
	NavigationBar,
	Page,
	PageName,
} from './gui/ui-kit/navigation-bar/navigation-bar';

import { CurrencyAPI, currencyAPIFactory } from './domain/currency-apis/currency-api-factory';
import { API } from './domain/currency-apis/common-api/api';
import { ConverterViewModel, IConverterViewModel } from './domain/models/converter/converter-view-model';
import { ConverterControlContainer } from './gui/views/converter/converter-control-container';
import { IRatesViewModel, RatesViewModel } from './domain/models/rates/rates-view-model';
import { RatesDisplayControlContainer } from './gui/views/rates-display/rates-display-control-controller';

interface AppState {
	currentPage: PageName;
	pages: Page[];
}

export class App extends React.Component<object, AppState> {
	private readonly _api: API;

	private readonly _converterModel: IConverterViewModel;
	private readonly _ratesModel: IRatesViewModel;

	public constructor(props: object) {
		super(props);

		this._api = currencyAPIFactory(CurrencyAPI.ExchangeRates);

		this._converterModel = new ConverterViewModel(this._api.getConvertCapability());
		this._ratesModel = new RatesViewModel(this._api.getRatesCapability());

		this.state = {
			currentPage: PageName.Converter,
			pages: [
				{ name: PageName.Converter, active: true },
				{ name: PageName.Rates, active: false },
			],
		};
	}

	public override render(): JSX.Element {
		return (
			<>
				<NavigationBar
					pages={ this.state.pages }
					pageButtonClickHandler={ this._switchPage }
				/>
				<main>
					{ this._renderSelectedPage() }
				</main>
			</>
		);
	}

	private _renderSelectedPage(): JSX.Element {
		switch (this.state.currentPage) {
			case PageName.Converter:
				return <ConverterControlContainer model={ this._converterModel } />;
			case PageName.Rates:
				return <RatesDisplayControlContainer model={ this._ratesModel } />;
		}
	}

	private _switchPage = (selectedPage: PageName): void => {
		const pages: Page[] = [...this.state.pages].map((page) => {
			return {
				name: page.name,
				active: page.name === selectedPage,
			};
		});

		this.setState({
			currentPage: selectedPage,
			pages,
		});
	};
}
