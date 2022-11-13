import { getErrorMessage } from 'src/common/helpers';
import { ConvertCapability } from '../currency-apis/common-api/capabilities/convert-capability';
import { ConvertationResult } from '../objects';

export interface IConverterViewModel {

}

export class ConverterViewModel {
	private readonly _convertCapability: ConvertCapability;

	private _from = '';
	private _to = '';
	private _amount = 1;
	private _result: ConvertationResult | null = null;

	public constructor(convertCapability: ConvertCapability) {
		this._convertCapability = convertCapability;
	}

	public getFrom(): string {
		return this._from;
	}

	public setFrom(value: string): void {
		this._from = value;
	}

	public getTo(): string {
		return this._to;
	}

	public setTo(value: string): void {
		this._to = value;
	}

	public getAmount(): number {
		return this._amount;
	}

	public setAmount(value: number): void {
		this._amount = value;
	}

	public getResult(): ConvertationResult | null {
		return this._result;
	}

	public async convert(): Promise<void> {
		try {
			this._result = await this._convertCapability.convert({
				from: this._from,
				to: this._to,
				amount: this._amount,
			});
		} catch (error) {
			throw new Error(getErrorMessage(error));
		}
	}
}
