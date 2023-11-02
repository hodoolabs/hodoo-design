'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { throttle } from 'lodash';
import { memo, useEffect, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { cn } from '../../utils/style';
import { ErrorStyle, InputStyle, LabelStyle, SkeletonStyle, ToggleStyle } from './style';
const DatePicker = (_a) => {
    var _b, _c;
    var { size = 'lg', label, error, helper, required, className, onError, onChange } = _a, props = __rest(_a, ["size", "label", "error", "helper", "required", "className", "onError", "onChange"]);
    const [isDestory, setIsDestroy] = useState(false);
    const isError = !!error;
    const handleChangeDate = (date, event, placeholder) => {
        if (!placeholder && !(date === null || date === void 0 ? void 0 : date.startDate) && !(date === null || date === void 0 ? void 0 : date.endDate))
            event.oncancel;
        else {
            onChange(date);
            onError && onError('');
        }
        setIsDestroy(true);
    };
    useEffect(() => {
        const handleResizeBrowser = throttle(() => {
            setIsDestroy(true);
        }, 1000);
        window.addEventListener('resize', handleResizeBrowser);
        return () => {
            window.removeEventListener('resize', handleResizeBrowser);
        };
    }, []);
    useEffect(() => {
        if (!isDestory)
            return;
        setIsDestroy(false);
    }, [isDestory]);
    return (_jsxs("div", { className: `flex flex-col ${className}`, children: [label && (_jsxs("label", { className: cn(LabelStyle({ isError })), children: [required && _jsx("span", { className: 'text-red-600', children: "*" }), " ", label] })), !isDestory ? (_jsx(Datepicker, Object.assign({ i18n: 'ko', readOnly: true, displayFormat: props.displayFormat, startFrom: ((_b = props.value) === null || _b === void 0 ? void 0 : _b.startDate) ? new Date((_c = props.value) === null || _c === void 0 ? void 0 : _c.startDate) : new Date(), toggleIcon: () => _jsx(CalendarDaysIcon, { className: 'w-5 h-5' }), toggleClassName: cn(ToggleStyle({ size, isError })), inputClassName: cn(InputStyle({ size, isError })), placeholder: props.placeholder || ' ', onChange: (date, event) => event && handleChangeDate(date, event, props.placeholder) }, props))) : (_jsx("div", { className: cn(SkeletonStyle({ size })) })), helper && _jsx("div", { className: 'pt-2 text-sm font-medium text-gray-500', children: helper }), _jsx("div", { className: cn(ErrorStyle({ isError })), children: error })] }));
};
export default memo(DatePicker, (prev, next) => prev.size === next.size &&
    prev.label === next.label &&
    prev.error === next.error &&
    prev.helper === next.helper &&
    prev.required === next.required &&
    prev.className === next.className &&
    prev.onChange === next.onChange &&
    prev.onError === next.onError);
