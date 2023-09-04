import { useRef } from 'react';

const useScrollBlock = () => {
	const scrollBlocked = useRef<boolean>(false);
	const safeDocument = document;
	const html = safeDocument.documentElement;
	const body = safeDocument.body;

	const blockScroll = () => {
		if (!body || !body.style || scrollBlocked.current) return;

		const scrollBarWidth = window.innerWidth - html.clientWidth;
		const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue('padding-right')) || 0;

		html.style.position = 'relative';
		body.style.position = 'relative';
		body.style.overflow = 'hidden';
		body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

		scrollBlocked.current = true;
	};

	const allowScroll = () => {
		if (!body || !body.style || !scrollBlocked.current) return;

		html.style.position = '';
		body.style.position = '';
		body.style.overflow = '';
		body.style.paddingRight = '';

		scrollBlocked.current = false;
	};

	return { blockScroll, allowScroll };
};

export default useScrollBlock;
