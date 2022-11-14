import { getErrorMessage } from 'src/common/helpers';
import { Observable } from 'src/common/observable';
import { ConvertCapability } from '../../currency-apis/common-api/capabilities/convert-capability';
import { ConvertationPayload, ConvertationResult } from '../../objects';

export interface IConverterViewModel {
	result$: Observable<ConvertationResult | null>;
	getResult(): ConvertationResult | null;
	convert(payload: ConvertationPayload): Promise<void>;
}

export class ConverterViewModel implements IConverterViewModel {
	public readonly result$ = new Observable<ConvertationResult | null>(null);

	private readonly _convertCapability: ConvertCapability;

	public constructor(convertCapability: ConvertCapability) {
		this._convertCapability = convertCapability;
	}

	public getResult(): ConvertationResult | null {
		return this.result$.getValue();
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

			this.result$.updateValue(convertationResult);
		} catch (error) {
			throw new Error(getErrorMessage(error));
		}
	};
}
