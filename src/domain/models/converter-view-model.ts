import { BehaviorSubject, Observable } from 'rxjs';

import { getErrorMessage } from 'src/common/helpers';
import { ConvertCapability } from '../currency-apis/common-api/capabilities/convert-capability';
import { ConvertationPayload, ConvertationResult } from '../objects';

export interface IConverterViewModel {
	result$: Observable<ConvertationResult | null>;
	getResult(): ConvertationResult | null;
	convert(payload: ConvertationPayload): Promise<void>;
}

export class ConverterViewModel implements IConverterViewModel {
	public readonly result$: Observable<ConvertationResult | null>;

	private readonly _convertCapability: ConvertCapability;

	private _result$ = new BehaviorSubject<ConvertationResult | null>(null);

	public constructor(convertCapability: ConvertCapability) {
		this._convertCapability = convertCapability;

		this.result$ = this._result$.asObservable();
	}

	public getResult(): ConvertationResult | null {
		return this._result$.getValue();
	}

	public convert = async (payload: ConvertationPayload): Promise<void> => {
		const {
			from,
			to,
			amount,
		} = payload;

		try {
			const convertationResult = await this._convertCapability.convert({
				from,
				to,
				amount,
			});

			this._result$.next(convertationResult);
		} catch (error) {
			throw new Error(getErrorMessage(error));
		}
	};
}
