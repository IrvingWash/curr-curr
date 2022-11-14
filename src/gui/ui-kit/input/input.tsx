import classNames from 'classnames';
import React from 'react';

import * as s from './input.scss';

interface InputProps {
	value: string;
	onChange(event: React.ChangeEvent<HTMLInputElement>): void;
	className?: string;
	placeholder?: string;
	disabled?: boolean;
}

export function Input(props: InputProps): JSX.Element {
	const {
		value,
		onChange,
		className,
		placeholder,
		disabled,
	} = props;

	return (
		<input
			className={ classNames(s.input, className) }
			value={ value }
			onChange={ onChange }
			placeholder={ placeholder }
			type='text'
			disabled={ disabled }
		/>
	);
}
