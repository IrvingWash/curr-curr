interface ConvertationBase {
	from: string;
	to: string;
}

export interface ConvertationResult extends ConvertationBase {
	result: number;
	rate: number;
}

export interface ConvertationPayload extends ConvertationBase {
	amount: number;
}
