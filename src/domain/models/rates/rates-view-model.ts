import { getErrorMessage } from 'src/common/helpers';
import { Observable } from 'src/common/observable';
import { RatesCapability } from 'src/domain/currency-apis/common-api/capabilities/rates-capability';
import { CurrencyRates } from 'src/domain/objects';

export interface IRatesViewModel {
	baseCurrency$: Observable<string>;
	rates$: Observable<CurrencyRates | null>;
	getBaseCurrency: () => string;
	setBaseCurrency(baseCurrency: string): void;
	getRates: () => Promise<void>;
}

export enum CurrencyCode {
	RUB = 'RUB',
	USD = 'USD',
	JPY = 'JPY',
}

export class RatesViewModel implements IRatesViewModel {
	public readonly baseCurrency$ = new Observable<string>(CurrencyCode.RUB);
	public readonly rates$ = new Observable<CurrencyRates | null>(null);

	private readonly _ratesCapability: RatesCapability;

	public constructor(ratesCapability: RatesCapability) {
		this._ratesCapability = ratesCapability;
	}

	public getBaseCurrency(): string {
		return this.baseCurrency$.getValue();
	}

	public setBaseCurrency(baseCurrency: string): void {
		this.baseCurrency$.updateValue(baseCurrency);
	}

	public getRates = async (): Promise<void> => {
		try {
			const rates = await this._ratesCapability.getRates(this.getBaseCurrency());

			this.rates$.updateValue(rates);
		} catch (error) {
			throw new Error(getErrorMessage(error));
		}
	};
}
