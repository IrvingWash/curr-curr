import { ConvertationResult } from 'src/domain/objects';
import { ERConvertResult } from '../er-objects';

export function convertERConvertationResult(convertationResult: ERConvertResult): ConvertationResult {
	const {
		query,
		info,
		result,
	} = convertationResult;

	return {
		from: query.from,
		to: query.to,
		rate: info.rate,
		result: result,
	};
}
