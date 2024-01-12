import React from 'react';

export function useIsNearScreen(
	callback: () => void,
	margin: string = '30px',
	threshold: number = 1.0,
) {
	const nodeRef = React.useRef<HTMLDivElement | null>(null);

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					callback();
				}
			},
			{ threshold, rootMargin: margin },
		);

		if (nodeRef.current) {
			observer.observe(nodeRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [callback, margin, threshold]);

	return nodeRef;
}
