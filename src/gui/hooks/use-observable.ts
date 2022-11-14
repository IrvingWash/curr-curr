import { useState, useEffect } from 'react';

import { Observable } from 'src/common/observable';

export function useObservable<T>(observable$: Observable<T>, initialValue: T): T {
	const [value, setValue] = useState(initialValue);

	useEffect(
		() => {
			observable$.subscribe(setValue);
			return () => observable$.unsubscribe();
		},
		[observable$]
	);

	return value;
}
