import React from 'react';

import { IConverterViewModel } from 'src/domain/models/converter/converter-view-model';
import { useObservable } from 'src/gui/hooks/use-observable';
import { ConverterResultDisplay } from './convertation-result-display/converter-result-display';
import { ConverterForm } from './converter-form/converter-form';

interface ConverterControlContainerProps {
	model: IConverterViewModel;
}

export function ConverterControlContainer(props: ConverterControlContainerProps): JSX.Element {
	const { model } = props;

	const convertationResult = useObservable(model.result$, model.getResult());

	return (
		<>
			<ConverterForm convert={ model.convert } />
			{ convertationResult !== null &&
				<ConverterResultDisplay convertationResult={ convertationResult } />
			}
		</>
	);
}
