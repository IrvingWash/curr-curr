interface ConvertationBase {
	from: string;
	to: string;
	amount: number;
}

export interface ConvertationResult extends ConvertationBase {
	result: number;
	rate: number;
}

export interface ConvertationPayload extends ConvertationBase {}

export interface CurrencyRates {
	base: string;
	date: string;
	rates: Record<string, number>;
}
