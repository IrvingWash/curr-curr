import {
	ERConvertRequest,
	ERConvertResult,
	ERLatestRates,
} from './er-objects';

import { IERFetch } from './er-fetch';

export interface IERTransport {
	convert(params: ERConvertRequest): Promise<ERConvertResult>;
	getLatestRates(baseCurrency: string): Promise<ERLatestRates>;
}

export class ERTransport implements IERTransport {
	private _fetch: IERFetch;

	private _convertURL: URL;
	private _latestRatesURL: URL;

	public constructor(baseURL: URL, erFetch: IERFetch) {
		this._fetch = erFetch;

		this._convertURL = new URL('convert', baseURL);
		this._latestRatesURL = new URL('latest', baseURL);
	}

	public async convert(params: ERConvertRequest): Promise<ERConvertResult> {
		const url = this._makeConvertURL(params);

		const convertResponse = await this._fetch.fetch<ERConvertResult>(url);

		if (!convertResponse.success) {
			throw new Error(convertResponse.error.info);
		}

		return convertResponse;
	}

	public async getLatestRates(baseCurrency: string): Promise<ERLatestRates> {
		const url = this._makeLatestRatesURL(baseCurrency);

		const latestRatesResponse = await this._fetch.fetch<ERLatestRates>(url);

		if (!latestRatesResponse.success) {
			throw new Error(latestRatesResponse.error.info);
		}

		return latestRatesResponse;
	}

	private _makeConvertURL(params: ERConvertRequest): URL {
		const url = new URL(this._convertURL);

		url.searchParams.append('from', params.from);
		url.searchParams.append('to', params.to);
		url.searchParams.append('amount', String(params.amount));

		return url;
	}

	private _makeLatestRatesURL(baseCurrency: string): URL {
		const url = new URL(this._latestRatesURL);

		url.searchParams.append('base', baseCurrency);

		return url;
	}
}
