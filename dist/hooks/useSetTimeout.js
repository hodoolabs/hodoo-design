'use client';
import { useEffect } from 'react';
const useSetTimeout = (time, callBack) => {
    if (!time)
        return;
    useEffect(() => {
        const timer = setTimeout(() => callBack(), time);
        return () => clearTimeout(timer);
    }, [time]);
};
export default useSetTimeout;
