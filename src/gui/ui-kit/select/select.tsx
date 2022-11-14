import React from 'react';

interface SelectProps {
	options: string[];
	changeHandler(event: React.ChangeEvent<HTMLSelectElement>): void;
}

export function Select(props: SelectProps): JSX.Element {
	const { options, changeHandler } = props;

	return (
		<select onChange={ changeHandler }>
			{ renderOptions() }
		</select>
	);

	function renderOptions(): JSX.Element[] {
		return options.map((option) => (
			<option key={ option } value={ option }>{ option }</option>
		));
	}
}
