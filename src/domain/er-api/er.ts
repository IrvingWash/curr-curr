import { ensureDefined } from 'src/common/helpers';
import { ERFetch, IERFetch } from './er-fetch';
import { ERTransport, IERTransport } from './er-transport';

export interface IER {

}

export class ER implements IER {
	private readonly _baseURL: URL;
	private readonly _apiKey: string;
	private readonly _erFetch: IERFetch;

	private readonly _erTransport: IERTransport;

	public constructor() {
		this._baseURL = new URL('https://api.apilayer.com/exchangerates_data/');
		this._apiKey = ensureDefined(process.env.ApiKey);
		this._erFetch = new ERFetch(this._apiKey);

		this._erTransport = new ERTransport(this._baseURL, this._erFetch);
	}
}
