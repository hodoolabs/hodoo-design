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
import { memo, useEffect, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import { ErrorStyle, InputStyle, LabelStyle, ToggleStyle } from './style';
const DatePicker = (_a) => {
    var { size, label, value, error, helper, required, className, onChange, onError } = _a, props = __rest(_a, ["size", "label", "value", "error", "helper", "required", "className", "onChange", "onError"]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (!onError)
            return;
        onError('');
    }, [value === null || value === void 0 ? void 0 : value.startDate, value === null || value === void 0 ? void 0 : value.endDate]);
    useEffect(() => {
        setIsLoading(false);
    }, [value === null || value === void 0 ? void 0 : value.startDate]);
    return (_jsxs(DatePickerStyled, { className: `flex flex-col ${className}`, children: [label && (_jsxs("label", { className: cn(LabelStyle({ error: !!error })), children: [required && _jsx("span", { className: 'text-red-600', children: "*" }), " ", label] })), !isLoading && (_jsx(Datepicker, Object.assign({ value: value, readOnly: true, startFrom: new Date(value === null || value === void 0 ? void 0 : value.startDate), toggleClassName: cn(ToggleStyle({ size, error: !!error })), inputClassName: cn(InputStyle({ size, error: !!error })), onChange: (date) => {
                    setIsLoading(true);
                    onChange(date);
                } }, props))), helper && _jsx("div", { className: 'pt-2 text-sm font-medium text-gray-500', children: helper }), _jsx("div", { className: cn(ErrorStyle({ error: !!error })), children: error })] }));
};
export default memo(DatePicker, (prev, next) => {
    var _a, _b, _c, _d;
    return prev.size === next.size &&
        prev.label === next.label &&
        ((_a = prev.value) === null || _a === void 0 ? void 0 : _a.startDate) === ((_b = next.value) === null || _b === void 0 ? void 0 : _b.startDate) &&
        ((_c = prev.value) === null || _c === void 0 ? void 0 : _c.endDate) === ((_d = next.value) === null || _d === void 0 ? void 0 : _d.endDate) &&
        prev.error === next.error &&
        prev.helper === next.helper &&
        prev.required === next.required &&
        prev.onChange === next.onChange &&
        prev.onError === next.onError;
});
const DatePickerStyled = styled.div `
	.transition-300 {
		transition: 0.3s;
	}
`;
