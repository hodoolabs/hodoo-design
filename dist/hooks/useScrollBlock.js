'use client';
import { useRef } from 'react';
const useScrollBlock = () => {
    const isBlock = useRef(false);
    const html = document.documentElement;
    const body = document.body;
    const blockScroll = () => {
        if (!body || !body.style || isBlock.current)
            return;
        const scrollBarWidth = window.innerWidth - html.clientWidth;
        const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue('padding-right')) || 0;
        html.style.position = 'relative';
        body.style.position = 'relative';
        body.style.overflow = 'hidden';
        body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
        isBlock.current = true;
    };
    const allowScroll = () => {
        if (!body || !body.style || !isBlock.current)
            return;
        html.style.position = '';
        body.style.position = '';
        body.style.overflow = '';
        body.style.paddingRight = '';
        isBlock.current = false;
    };
    return { blockScroll, allowScroll };
};
export default useScrollBlock;
