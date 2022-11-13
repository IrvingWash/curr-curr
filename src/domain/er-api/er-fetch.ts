import { HTTPMethod } from 'src/common/constants';

export interface IERFetch {
	fetch: <T>(url: URL, method?: HTTPMethod, body?: object) => Promise<T>;
}

export class ERFetch implements IERFetch {
	private readonly _apiKey: string;

	public constructor(apiKey: string) {
		this._apiKey = apiKey;
	}

	public async fetch<T>(url: URL, method = HTTPMethod.Get, body?: object): Promise<T> {
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
