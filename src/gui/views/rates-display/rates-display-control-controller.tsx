import React, { useState } from 'react';

import { IRatesViewModel } from 'src/domain/models/rates/rates-view-model';
import { useObservable } from 'src/gui/hooks/use-observable';
import { RatesDisplay } from './rates-display/rates-display';

export function RatesDisplayControlContainer(props: { model: IRatesViewModel }): JSX.Element {
	const { model } = props;

	const baseCurrency = useObservable(model.baseCurrency$, model.getBaseCurrency());
	const rates = useObservable(model.rates$, model.rates$.getValue());

	const [selectedBaseCurrency, setSelectedBaseCurrency] = useState(baseCurrency);

	return (
		<RatesDisplay
			baseCurrency={ selectedBaseCurrency }
			rates={ rates }
			getRates={ model.getRates }
			baseCurrencySelectionHandler={ selectBaseCurrency }
		/>
	);

	function selectBaseCurrency(baseCurrency: string): void {
		setSelectedBaseCurrency(baseCurrency);
	}
}
