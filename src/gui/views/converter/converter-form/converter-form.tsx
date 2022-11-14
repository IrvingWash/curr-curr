import React, { useState } from 'react';

import { ConvertationPayload } from 'src/domain/objects';
import { Button } from 'src/gui/ui-kit/button/button';
import { Input } from 'src/gui/ui-kit/input/input';
import { Loader } from 'src/gui/ui-kit/loader/loader';

import * as s from './converter-form.scss';

interface ConvertFormProps {
	convert(payload: ConvertationPayload): Promise<void>;
}

export function ConverterForm(props: ConvertFormProps): JSX.Element {
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [amount, setAmount] = useState('');

	const [isLoading, setIsLoading] = useState(false);

	return (
		<form onSubmit={ handleConverterFormSubmit } className={ s.converterForm }>
			<Input
				className={ s.formControl }
				value={ from }
				onChange={ handleFromInputChange }
				placeholder='Convert from'
				disabled={ isLoading }
			/>

			<Input
				className={ s.formControl }
				value={ to }
				onChange={ handleToInputChange }
				placeholder='Convert to'
				disabled={ isLoading }
			/>

			<Input
				className={ s.formControl }
				value={ amount }
				onChange={ handleAmountInputChange }
				placeholder='Amount to convert'
				disabled={ isLoading }
			/>

			<Button
				className={ s.formControl }
				text='Convert'
				disabled={ isLoading }
				type='submit'
			/>

			{ isLoading && <Loader className={ s.formLoader } />}
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

		setIsLoading(true);

		try {
			await props.convert({
				from,
				to,
				amount: +amount,
			});

			clearInputs();
		} finally {
			setIsLoading(false);
		}
	}

	function clearInputs(): void {
		setFrom('');
		setTo('');
		setAmount('');
	}
}
