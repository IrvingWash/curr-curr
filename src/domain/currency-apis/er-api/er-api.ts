import { ensureDefined } from 'src/common/helpers';
import { IAPI } from '../common-api/api';
import { IConvertCapability } from '../common-api/capabilities/convert-capability';
import { IRatesCapability } from '../common-api/capabilities/rates-capability';
import { ERConvertCapability } from './capabilities/er-convert-capability';
import { ERRatesCapability } from './capabilities/er-rates-capability';
import { ERFetch, IERFetch } from './er-fetch';
import { ERTransport, IERTransport } from './er-transport';

export class ERAPI implements IAPI {
	private readonly _baseURL: URL;
	private readonly _apiKey: string;
	private readonly _fetch: IERFetch;
	private readonly _transport: IERTransport;

	private readonly _convertCapability: IConvertCapability;
	private readonly _ratesCapability: IRatesCapability;

	public constructor() {
		this._baseURL = new URL('https://api.apilayer.com/exchangerates_data/');
		this._apiKey = ensureDefined(process.env.ERApiKey);
		this._fetch = new ERFetch(this._apiKey);
		this._transport = new ERTransport(this._baseURL, this._fetch);

		this._convertCapability = new ERConvertCapability(this._transport);
		this._ratesCapability = new ERRatesCapability(this._transport);
	}

	public getConvertCapability(): IConvertCapability {
		return this._convertCapability;
	}

	public getRatesCapability(): IRatesCapability {
		return this._ratesCapability;
	}
}
