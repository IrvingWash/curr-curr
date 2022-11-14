import React from 'react';

interface LoaderProps {
	className?: string;
}

export function Loader(props: LoaderProps): JSX.Element {
	return <p className={ props.className }>Loading...</p>;
}
