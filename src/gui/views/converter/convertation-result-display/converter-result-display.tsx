import React from 'react';

import { ConvertationResult } from 'src/domain/objects';

import * as s from './converter-result-display.scss';

interface ConvertationResultDisplayProps {
	convertationResult: ConvertationResult;
}

export function ConverterResultDisplay(props: ConvertationResultDisplayProps): JSX.Element {
	const { convertationResult } = props;

	return (
		<div className={ s.converterResultDisplay }>
			<h1>Result:</h1>
			<p>From: { convertationResult.from } x{ convertationResult.amount }</p>
			<p>To: { convertationResult.to }</p>
			<p>Result: { convertationResult.result }</p>
			<p>Rate: { convertationResult.rate }</p>
		</div>
	);
}
