import React from 'react';

import { IRatesViewModel } from 'src/domain/models/rates/rates-view-model';

export function RatesDisplayControlContainer(props: { model: IRatesViewModel }): JSX.Element {
	const { model } = props;

	return (
		<div>Rates</div>
	);
}
