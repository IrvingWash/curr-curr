import classNames from 'classnames';
import React from 'react';

import * as s from './navigation-bar.scss';

export const enum PageName {
	Converter = 'Converter',
	Rates = 'Rates',
}

export interface Page {
	name: PageName;
	active: boolean;
}

interface NavigationBarProps {
	pages: Page[];
	pageButtonClickHandler(page: PageName): void;
}

export function NavigationBar(props: NavigationBarProps): JSX.Element {
	const {
		pages,
		pageButtonClickHandler,
	} = props;

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
		return pages.map((page) => (
			<li
				className={ classNames(s.pageButton, page.active ? s.active : null) }
				onClick={ (): void => pageButtonClickHandler(page.name) }
				key={ page.name }
			>
					{ page.name }
			</li>
		));
	}
}
