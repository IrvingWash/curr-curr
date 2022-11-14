import classNames from 'classnames';
import React from 'react';

import * as s from './navigation-bar.scss';

interface NavigationBarProps {
	pages: {
		name: string;
		active?: boolean;
	}[];
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
			<li
				className={ classNames(s.pageButton, page.active ? s.active : null) }
			>
					{ page.name }
			</li>
		));
	}
}
