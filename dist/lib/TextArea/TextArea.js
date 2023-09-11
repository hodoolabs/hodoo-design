'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect } from 'react';
import { cn } from '../../utils/style';
import { ErrorStyle, HelperStyle, LabelStyle, MaxLengthStyle, TextareaStyle } from './style';
const TextArea = ({ size, label, value, error, maxLength, placeholder, helper, disabled, height, required, onChange, onError, }) => {
    useEffect(() => {
        if (!onError)
            return;
        onError('');
    }, [value]);
    return (_jsxs("div", { className: 'flex flex-col', children: [label && (_jsxs("label", { className: cn(LabelStyle({ size, error: !!error })), children: [required && _jsx("span", { className: 'text-red-600', children: "*" }), " ", label, maxLength && (_jsxs("span", { className: cn(MaxLengthStyle({ error: !!error })), children: [value === null || value === void 0 ? void 0 : value.length, "/", maxLength] }))] })), _jsx("textarea", { className: cn(TextareaStyle({ size, error: !!error })), value: value, maxLength: maxLength, placeholder: placeholder, disabled: disabled, onChange: (event) => onChange && onChange(event.target.value), style: { height: height } }), helper && _jsx("div", { className: cn(HelperStyle({ size })), children: helper }), _jsx("div", { className: cn(ErrorStyle({ size, error: !!error })), children: error })] }));
};
export default memo(TextArea, (prev, next) => prev.size === next.size &&
    prev.label === next.label &&
    prev.value === next.value &&
    prev.error === next.error &&
    prev.maxLength === next.maxLength &&
    prev.placeholder === next.placeholder &&
    prev.helper === next.helper &&
    prev.disabled === next.disabled &&
    prev.height === next.height &&
    prev.required === next.required &&
    prev.onChange === next.onChange &&
    prev.onError === next.onError);
