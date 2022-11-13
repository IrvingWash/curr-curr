/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function ensureDefined<T>(value: T | undefined, message?: string): T {
	if (value === undefined) {
		throw new Error(message ?? 'Value is undefined');
	}

	return value;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getErrorMessage(error: any): string {
	if (error === undefined) {
		return 'Unknown error';
	}

	if (error instanceof Error) {
		return error.message;
	}

	if (typeof error === 'object') {
		return JSON.stringify(error);
	}

	return error.toString();
}
