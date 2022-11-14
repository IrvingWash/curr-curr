import React from 'react';

import { ConvertationResult } from 'src/domain/objects';

interface ConvertationResultDisplayProps {
	convertationResult: ConvertationResult;
}

export function ConvertationResultDisplay(props: ConvertationResultDisplayProps): JSX.Element {
	const { convertationResult } = props;

	return (
		<div>
			<p>From: { convertationResult.from }</p>
			<p>To: { convertationResult.to }</p>
			<p>Result: { convertationResult.result }</p>
			<p>Rate: { convertationResult.rate }</p>
		</div>
	);
}
