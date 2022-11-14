import React from 'react';

interface SelectProps {
	options: string[];
	changeHandler(event: React.ChangeEvent<HTMLSelectElement>): void;
	className?: string;
}

export function Select(props: SelectProps): JSX.Element {
	const {
		options,
		changeHandler,
		className,
	} = props;

	return (
		<select className={ className } onChange={ changeHandler }>
			{ renderOptions() }
		</select>
	);

	function renderOptions(): JSX.Element[] {
		return options.map((option) => (
			<option key={ option } value={ option }>{ option }</option>
		));
	}
}
