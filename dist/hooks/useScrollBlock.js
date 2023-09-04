import { useRef } from 'react';
var useScrollBlock = function () {
    var scrollBlocked = useRef(false);
    var safeDocument = document;
    var html = safeDocument.documentElement;
    var body = safeDocument.body;
    var blockScroll = function () {
        if (!body || !body.style || scrollBlocked.current)
            return;
        var scrollBarWidth = window.innerWidth - html.clientWidth;
        var bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue('padding-right')) || 0;
        html.style.position = 'relative';
        body.style.position = 'relative';
        body.style.overflow = 'hidden';
        body.style.paddingRight = "".concat(bodyPaddingRight + scrollBarWidth, "px");
        scrollBlocked.current = true;
    };
    var allowScroll = function () {
        if (!body || !body.style || !scrollBlocked.current)
            return;
        html.style.position = '';
        body.style.position = '';
        body.style.overflow = '';
        body.style.paddingRight = '';
        scrollBlocked.current = false;
    };
    return { blockScroll: blockScroll, allowScroll: allowScroll };
};
export default useScrollBlock;
