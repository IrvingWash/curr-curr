import React from 'react';

import { IConverterViewModel } from 'src/domain/models/converter-view-model';
import { useObservable } from 'src/gui/hooks/use-observable';
import { ConvertationResultDisplay } from './convertation-result-display/convertation-result-display';
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
				<ConvertationResultDisplay convertationResult={ convertationResult } />
			}
		</>
	);
}
