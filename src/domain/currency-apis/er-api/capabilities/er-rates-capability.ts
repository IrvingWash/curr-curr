import { CurrencyRates } from 'src/domain/objects';
import { ConvertERRates } from '../converters/er-rates-converter';
import { IERTransport } from '../er-transport';

export class ERRatesCapability {
	private _transport: IERTransport;

	public constructor(transport: IERTransport) {
		this._transport = transport;
	}

	public async getRates(baseCurrency: string): Promise<CurrencyRates> {
		const rates = await this._transport.getLatestRates(baseCurrency);

		return ConvertERRates(rates);
	}
}
