'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import { ButtonStyle, ErrorStyle, HelperStyle, InputLabelStyle, LabelStyle } from './style';
const FileInput = ({ size, label, value, error, buttonName, placeholder, helper, required, onChange, }) => {
    const getLabelStatus = (value, error) => {
        if (value && !error)
            return 'value';
        if (value && error)
            return 'valueError';
        if (!value && !error)
            return 'placeholder';
        if (!value && error)
            return 'placeholderError';
    };
    return (_jsxs("div", { className: 'flex flex-col', children: [label && (_jsxs("label", { className: cn(LabelStyle({ size, error: !!error })), children: [required && _jsx("span", { className: 'text-red-600', children: "*" }), " ", label] })), _jsxs("div", { className: 'relative flex w-full group', children: [_jsx("button", { className: cn(ButtonStyle({ size })), children: buttonName }), error && (_jsx("label", { className: cn(InputLabelStyle({ size, error: getLabelStatus(value, error) })), children: _jsx("span", { className: 'block overflow-hidden whitespace-nowrap', children: value || placeholder }) })), _jsx("input", { type: 'file', onChange: (event) => event.target.files && onChange(event.target.files), className: 'absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-1' })] }), helper && _jsx("div", { className: cn(HelperStyle({ size })), children: helper }), _jsx("div", { className: cn(ErrorStyle({ size, error: !!error })), children: error })] }));
};
export default memo(FileInput, (prev, next) => prev.size === next.size &&
    prev.label === next.label &&
    prev.value === next.value &&
    prev.error === next.error &&
    prev.buttonName === next.buttonName &&
    prev.placeholder === next.placeholder &&
    prev.helper === next.helper &&
    prev.required === next.required &&
    prev.onChange === next.onChange);
