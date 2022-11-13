import { ConvertationPayload, ConvertationResult } from 'src/domain/objects';

export interface ConvertCapability {
	convert(params: ConvertationPayload): Promise<ConvertationResult>;
}
