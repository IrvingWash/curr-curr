export type ERSuccessResponse<EREntity> = { success: true } & EREntity;

export interface ERErrorResponse {
	success: false;
	error: {
		code: number;
		info: string;
	}
}

export type ERResponse<EREntity> = ERSuccessResponse<EREntity> | ERErrorResponse;

export interface ERConvertResult {
	date: string;
	historical: boolean;
	info: {
		timestamp: string;
		rate: number;
	};
	query: ERConvertRequest;
	result: number;
}

export interface ERConvertRequest {
	from: string;
	to: string;
	amount: number;
}
