import { getErrorMessage } from 'src/common/helpers';
import { Observable } from 'src/common/observable';
import { RatesCapability } from 'src/domain/currency-apis/common-api/capabilities/rates-capability';
import { CurrencyRates } from 'src/domain/objects';

export interface IRatesViewModel {
	baseCurrency$: Observable<string | null>;
	rates$: Observable<CurrencyRates | null>;
	getBaseCurrency: () => string | null;
	setBaseCurrency(baseCurrency: string): void;
	getRates: () => Promise<void>;
}

export class RatesViewModel implements IRatesViewModel {
	public readonly baseCurrency$ = new Observable<string | null>(null);
	public readonly rates$ = new Observable<CurrencyRates | null>(null);

	private readonly _ratesCapability: RatesCapability;

	public constructor(ratesCapability: RatesCapability) {
		this._ratesCapability = ratesCapability;
	}

	public getBaseCurrency(): string | null {
		return this.baseCurrency$.getValue();
	}

	public setBaseCurrency(baseCurrency: string): void {
		this.baseCurrency$.updateValue(baseCurrency);
	}

	public getRates = async (): Promise<void> => {
		const baseCurrency = this.getBaseCurrency();

		if (baseCurrency === null) {
			throw new Error('Base currency is not selected');
		}

		try {
			const rates = await this._ratesCapability.getRates(baseCurrency);

			this.rates$.updateValue(rates);
		} catch (error) {
			throw new Error(getErrorMessage(error));
		}
	};
}
