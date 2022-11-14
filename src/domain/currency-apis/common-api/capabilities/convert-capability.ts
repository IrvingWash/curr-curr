import { ConvertationPayload, ConvertationResult } from 'src/domain/objects';

export interface IConvertCapability {
	convert(params: ConvertationPayload): Promise<ConvertationResult>;
}
