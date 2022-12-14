import React from 'react';

import { IRatesViewModel } from 'src/domain/models/rates/rates-view-model';
import { useObservable } from 'src/gui/hooks/use-observable';
import { RatesDisplay } from './rates-display/rates-display';

export function RatesDisplayControlContainer(props: { model: IRatesViewModel }): JSX.Element {
	const { model } = props;

	const baseCurrency = useObservable(model.baseCurrency$, model.getBaseCurrency());
	const rates = useObservable(model.rates$, model.rates$.getValue());

	return (
		<RatesDisplay
			baseCurrency={ baseCurrency }
			rates={ rates }
			getRates={ model.getRates }
			baseCurrencySelectionHandler={ selectBaseCurrency }
		/>
	);

	function selectBaseCurrency(baseCurrency: string): void {
		model.setBaseCurrency(baseCurrency);
	}
}
