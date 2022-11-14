import { IAPI } from './common-api/api';
import { ERAPI } from './er-api/er-api';

export const enum CurrencyAPI {
	ExchangeRates = 'Exchange Rates',
}

export function currencyAPIFactory(api: CurrencyAPI): IAPI {
	switch (api) {
		case CurrencyAPI.ExchangeRates:
			return new ERAPI();

		default:
			throw new Error('No such API');
	}
}
