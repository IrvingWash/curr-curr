import { CurrencyRates } from 'src/domain/objects';

export interface IRatesCapability {
	getRates(baseCurrency: string): Promise<CurrencyRates>;
}
