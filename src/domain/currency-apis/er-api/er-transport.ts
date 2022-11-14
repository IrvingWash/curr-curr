import { IERFetch } from './er-fetch';
import { ERConvertRequest, ERConvertResult } from './er-objects';

export interface IERTransport {
	convert(params: ERConvertRequest): Promise<ERConvertResult>;
}

export class ERTransport implements IERTransport {
	private _fetch: IERFetch;

	private _convertURL: URL;

	public constructor(baseURL: URL, erFetch: IERFetch) {
		this._fetch = erFetch;

		this._convertURL = new URL('convert', baseURL);
	}

	public async convert(params: ERConvertRequest): Promise<ERConvertResult> {
		const url = this._makeConvertURL(params);

		const convertResponse = await this._fetch.fetch<ERConvertResult>(url);

		if (!convertResponse.success) {
			throw new Error(convertResponse.error.info);
		}

		return convertResponse;
	}

	private _makeConvertURL(params: ERConvertRequest): URL {
		const url = new URL(this._convertURL);

		url.searchParams.append('from', params.from);
		url.searchParams.append('to', params.to);
		url.searchParams.append('amount', String(params.amount));

		return url;
	}
}
