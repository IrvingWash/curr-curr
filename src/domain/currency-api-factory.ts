import { API } from './currency-apis/common-api/api';
import { ERAPI } from './currency-apis/er-api/er-api';

export const enum CurrencyAPI {
	ExchangeRates = 'Exchange Rates',
}

export function currencyAPIFactory(api: CurrencyAPI): API {
	switch (api) {
		case CurrencyAPI.ExchangeRates:
			return new ERAPI();

		default:
			throw new Error('No such API');
	}
}
