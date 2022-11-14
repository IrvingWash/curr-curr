import { getErrorMessage } from 'src/common/helpers';
import { ConvertCapability } from '../currency-apis/common-api/capabilities/convert-capability';
import { ConvertationPayload, ConvertationResult } from '../objects';

export interface IConverterViewModel {
	getResult(): ConvertationResult | null;
	convert(payload: ConvertationPayload): Promise<void>;
}

export class ConverterViewModel implements IConverterViewModel {
	private readonly _convertCapability: ConvertCapability;

	private _result: ConvertationResult | null = null;

	public constructor(convertCapability: ConvertCapability) {
		this._convertCapability = convertCapability;
	}

	public getResult(): ConvertationResult | null {
		return this._result;
	}

	public convert = async (payload: ConvertationPayload): Promise<void> => {
		const {
			from,
			to,
			amount,
		} = payload;

		try {
			this._result = await this._convertCapability.convert({
				from,
				to,
				amount,
			});
		} catch (error) {
			throw new Error(getErrorMessage(error));
		}
	};
}
