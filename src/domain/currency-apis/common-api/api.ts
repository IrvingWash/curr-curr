import { IConvertCapability } from './capabilities/convert-capability';
import { IRatesCapability } from './capabilities/rates-capability';

export interface IAPI {
	getConvertCapability(): IConvertCapability;
	getRatesCapability(): IRatesCapability;
}
