import { ConvertationPayload, ConvertationResult } from 'src/domain/objects';
import { ConvertCapability } from '../../common-api/capabilities/convert-capability';
import { convertERConvertationResult } from '../converters/er-convertation-result-converter';
import { IERTransport } from '../er-transport';

export class ERConvertCapability implements ConvertCapability {
	private readonly _transport: IERTransport;

	public constructor(transport: IERTransport) {
		this._transport = transport;
	}

	public async convert(params: ConvertationPayload): Promise<ConvertationResult> {
		const convertationResult = await this._transport.convert(params);

		return convertERConvertationResult(convertationResult);
	}
}
