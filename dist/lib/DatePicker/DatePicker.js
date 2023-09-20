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
import dayjs from 'dayjs';
import { memo, useEffect, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import { ErrorStyle, InputStyle, LabelStyle, SkeletonStyle, ToggleStyle } from './style';
const DatePicker = (_a) => {
    var { size, label, value, error, format = 'YYYY-MM-DD', helper, required, className, onChange, onError } = _a, props = __rest(_a, ["size", "label", "value", "error", "format", "helper", "required", "className", "onChange", "onError"]);
    const [isLoading, setIsLoading] = useState(false);
    const handleChangeDate = (placeholder, date) => {
        if (!placeholder && (date === null || date === void 0 ? void 0 : date.startDate) === null && (date === null || date === void 0 ? void 0 : date.endDate) === null)
            onChange({ startDate: dayjs().format(format), endDate: dayjs().format(format) });
        else
            onChange(date);
        setIsLoading(true);
    };
    useEffect(() => {
        if (!onError)
            return;
        onError('');
    }, [value === null || value === void 0 ? void 0 : value.startDate, value === null || value === void 0 ? void 0 : value.endDate]);
    useEffect(() => {
        if (!isLoading)
            return;
        setIsLoading(false);
    }, [isLoading]);
    return (_jsxs(DatePickerStyled, { className: `flex flex-col ${className}`, children: [label && (_jsxs("label", { className: cn(LabelStyle({ error: !!error })), children: [required && _jsx("span", { className: 'text-red-600', children: "*" }), " ", label] })), !isLoading ? (_jsx(Datepicker, Object.assign({ value: value, displayFormat: format, readOnly: true, startFrom: (value === null || value === void 0 ? void 0 : value.startDate) ? new Date(value === null || value === void 0 ? void 0 : value.startDate) : new Date(), toggleIcon: () => _jsx(CalendarDaysIcon, { className: 'w-5 h-5' }), toggleClassName: cn(ToggleStyle({ size, error: !!error })), inputClassName: cn(InputStyle({ size, error: !!error })), placeholder: props.placeholder ? props.placeholder : ' ', onChange: (date) => handleChangeDate(props.placeholder, date) }, props))) : (_jsx("div", { className: cn(SkeletonStyle({ size })) })), helper && _jsx("div", { className: 'pt-2 text-sm font-medium text-gray-500', children: helper }), _jsx("div", { className: cn(ErrorStyle({ error: !!error })), children: error })] }));
};
export default memo(DatePicker, (prev, next) => {
    var _a, _b, _c, _d;
    return prev.size === next.size &&
        prev.label === next.label &&
        ((_a = prev.value) === null || _a === void 0 ? void 0 : _a.startDate) === ((_b = next.value) === null || _b === void 0 ? void 0 : _b.startDate) &&
        ((_c = prev.value) === null || _c === void 0 ? void 0 : _c.endDate) === ((_d = next.value) === null || _d === void 0 ? void 0 : _d.endDate) &&
        prev.error === next.error &&
        prev.format === next.format &&
        prev.helper === next.helper &&
        prev.required === next.required &&
        prev.className === next.className &&
        prev.onChange === next.onChange &&
        prev.onError === next.onError;
});
const DatePickerStyled = styled.div `
	.transition-300 {
		transition: 0.3s;
	}
`;
