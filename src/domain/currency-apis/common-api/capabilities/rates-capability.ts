import { CurrencyRates } from 'src/domain/objects';

export interface RatesCapability {
	getRates(baseCurrency: string): Promise<CurrencyRates>;
}
