import { ConvertCapability } from './capabilities/convert-capability';
import { RatesCapability } from './capabilities/rates-capability';

export interface API {
	getConvertCapability(): ConvertCapability;
	getRatesCapability(): RatesCapability;
}
