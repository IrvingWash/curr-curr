import React, { useState } from 'react';

import { ConvertationPayload } from 'src/domain/objects';
import { Button } from 'src/gui/ui-kit/button/button';
import { Input } from 'src/gui/ui-kit/input/input';

interface ConvertFormProps {
	convert(payload: ConvertationPayload): Promise<void>;
}

export function ConverterForm(props: ConvertFormProps): JSX.Element {
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [amount, setAmount] = useState('');

	return (
		<form onSubmit={ handleConverterFormSubmit }>
			<Input
				value={ from }
				onChange={ handleFromInputChange }
				placeholder='Convert from'
			/>

			<Input
				value={ to }
				onChange={ handleToInputChange }
				placeholder='Convert to'
			/>

			<Input
				value={ amount }
				onChange={ handleAmountInputChange }
				placeholder='Amount to convert'
			/>

			<Button text='Convert' />
		</form>
	);

	function handleFromInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
		setFrom(event.target.value);
	}

	function handleToInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
		setTo(event.target.value);
	}

	function handleAmountInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
		setAmount(event.target.value);
	}

	async function handleConverterFormSubmit(event: React.FormEvent): Promise<void> {
		event.preventDefault();

		await props.convert({
			from,
			to,
			amount: +amount,
		});

		clearInputs();
	}

	function clearInputs(): void {
		setFrom('');
		setTo('');
		setAmount('');
	}
}
