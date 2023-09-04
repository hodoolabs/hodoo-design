import { useEffect } from 'react';

const useSetTimeout = (toastingTime: number | undefined, func: () => void) => {
	if (!toastingTime) return;

	useEffect(() => {
		const timer = setTimeout(() => {
			func();
		}, toastingTime);

		return () => clearTimeout(timer);
	}, [toastingTime]);
};

export default useSetTimeout;
