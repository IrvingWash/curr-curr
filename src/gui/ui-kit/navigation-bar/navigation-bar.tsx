import React from 'react';

import * as s from './navigation-bar.scss';

interface NavigationBarProps {
	pages: string[];
}

export function NavigationBar(props: NavigationBarProps): JSX.Element {
	return (
		<header className={ s.navigationBar }>
			<nav>
				<ul>
					{ makePageButtons() }
				</ul>
			</nav>
		</header>
	);

	function makePageButtons(): JSX.Element[] {
		return props.pages.map((page) => (
			<li className={ s.pageButton }>{ page }</li>
		));
	}
}
