import classNames from 'classnames';
import React from 'react';

import * as s from './button.scss';

interface ButtonProps {
	text: string;
	onClick?(): void;
	className?: string;
	type?: 'submit';
}

export function Button(props: ButtonProps): JSX.Element {
	const {
		text,
		onClick,
		className,
		type,
	} = props;

	return (
		<button
			className={ classNames(s.button, className) }
			type={ type }
			onClick={ onClick }
		>
			{ text }
		</button>
	);
}
