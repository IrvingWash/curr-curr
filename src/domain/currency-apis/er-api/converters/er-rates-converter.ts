import { CurrencyRates } from 'src/domain/objects';
import { ERLatestRates } from '../er-objects';

export function ConvertERRates(erRates: ERLatestRates): CurrencyRates {
	const {
		base,
		date,
		rates,
	} = erRates;

	return {
		base,
		date,
		rates,
	};
}
