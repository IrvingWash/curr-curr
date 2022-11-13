import { HTTPMethod } from 'src/common/constants';
import { ERResponse } from './er-objects';

export interface IERFetch {
	fetch: <EREntity>(url: URL, method?: HTTPMethod, body?: object) => Promise<ERResponse<EREntity>>;
}

export class ERFetch implements IERFetch {
	private readonly _apiKey: string;

	public constructor(apiKey: string) {
		this._apiKey = apiKey;
	}

	public async fetch<EREntity>(url: URL, method = HTTPMethod.Get, body?: object): Promise<ERResponse<EREntity>> {
		const response = await fetch(
			url,
			{
				headers: {
					'Content-Type': 'application/json',
					'apikey': this._apiKey,
				},
				method,
				body: body !== undefined ? JSON.stringify(body) : null,
			}
		);

		return await response.json();
	}
}
