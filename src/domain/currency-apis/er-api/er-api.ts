import { ensureDefined } from 'src/common/helpers';
import { API } from '../common-api/api';
import { ConvertCapability } from '../common-api/capabilities/convert-capability';
import { ERConvertCapability } from './capabilities/er-convert-capability';
import { ERFetch, IERFetch } from './er-fetch';
import { ERTransport, IERTransport } from './er-transport';

export class ERAPI implements API {
	private readonly _baseURL: URL;
	private readonly _apiKey: string;
	private readonly _fetch: IERFetch;
	private readonly _transport: IERTransport;

	private readonly _convertCapability: ConvertCapability;

	public constructor() {
		this._baseURL = new URL('https://api.apilayer.com/exchangerates_data/');
		this._apiKey = ensureDefined(process.env.ApiKey);
		this._fetch = new ERFetch(this._apiKey);
		this._transport = new ERTransport(this._baseURL, this._fetch);

		this._convertCapability = new ERConvertCapability(this._transport);
	}

	public getConvertCapability(): ConvertCapability {
		return this._convertCapability;
	}
}