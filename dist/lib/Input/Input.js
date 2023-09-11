'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect } from 'react';
import { cn } from '../../utils/style';
import { ErrorStyle, HelperStyle, InputStyle, LabelStyle, MaxLengthStyle } from './style';
const Input = ({ type = 'text', size, label, value, error, maxLength, placeholder, helper, disabled, required, className, onBlur, onChange, onError, onEnter, }) => {
    useEffect(() => {
        if (!onError)
            return;
        onError('');
    }, [value]);
    return (_jsxs("div", { className: `flex flex-col ${className}`, children: [label && (_jsxs("label", { className: cn(LabelStyle({ size, error: !!error })), children: [required && _jsx("span", { className: 'text-red-600', children: "*" }), " ", label, maxLength && (_jsxs("span", { className: cn(MaxLengthStyle({ error: !!error })), children: [value === null || value === void 0 ? void 0 : value.length, "/", maxLength] }))] })), _jsx("input", { className: cn(InputStyle({ size, error: !!error })), type: type, value: value, maxLength: maxLength, placeholder: placeholder, disabled: disabled, onBlur: (event) => onBlur && onBlur(event.target.value), onChange: (event) => onChange && onChange(event.target.value), onKeyDown: (event) => event.key === 'Enter' && onEnter && onEnter() }), helper && _jsx("div", { className: cn(HelperStyle({ size })), children: helper }), _jsx("div", { className: cn(ErrorStyle({ size, error: !!error })), children: error })] }));
};
export default memo(Input, (prev, next) => prev.type === next.type &&
    prev.size === next.size &&
    prev.label === next.label &&
    prev.value === next.value &&
    prev.error === next.error &&
    prev.maxLength === next.maxLength &&
    prev.placeholder === next.placeholder &&
    prev.helper === next.helper &&
    prev.disabled === next.disabled &&
    prev.required === next.required &&
    prev.className === next.className &&
    prev.onBlur === next.onBlur &&
    prev.onChange === next.onChange &&
    prev.onError === next.onError &&
    prev.onEnter === next.onEnter);
