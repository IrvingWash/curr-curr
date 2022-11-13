import React from 'react';
import { IConverterViewModel } from 'src/domain/models/converter-view-model';
import { ConverterForm } from './converter-form';

export function ConverterFormControlContainer(props: { model: IConverterViewModel }): JSX.Element {
	return (
		<ConverterForm convert={ convert } />
	);

	async function convert(): Promise<void> {
		await props.model.convert();
	}
}
