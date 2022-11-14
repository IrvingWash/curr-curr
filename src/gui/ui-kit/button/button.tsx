import classNames from 'classnames';
import React from 'react';

import * as s from './button.scss';

interface ButtonProps {
	text: string;
	onClick?(): void;
	className?: string;
	type?: 'submit';
	disabled?: boolean;
}

export function Button(props: ButtonProps): JSX.Element {
	const {
		text,
		onClick,
		className,
		type,
		disabled,
	} = props;

	return (
		<button
			className={ classNames(s.button, className) }
			type={ type }
			onClick={ onClick }
			disabled={ disabled }
		>
			{ text }
		</button>
	);
}
