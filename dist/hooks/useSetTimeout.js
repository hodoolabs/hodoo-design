import { useEffect } from 'react';
var useSetTimeout = function (toastingTime, func) {
    if (!toastingTime)
        return;
    useEffect(function () {
        var timer = setTimeout(function () {
            func();
        }, toastingTime);
        return function () { return clearTimeout(timer); };
    }, [toastingTime]);
};
export default useSetTimeout;
