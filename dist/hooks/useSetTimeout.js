'use client';
import { useEffect } from 'react';
const useSetTimeout = (toastingTime, func) => {
    if (!toastingTime)
        return;
    useEffect(() => {
        const timer = setTimeout(() => {
            func();
        }, toastingTime);
        return () => clearTimeout(timer);
    }, [toastingTime]);
};
export default useSetTimeout;
