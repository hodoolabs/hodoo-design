'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import { ButtonStyle, ErrorStyle, HelperStyle, InputLabelStyle, LabelStyle } from './style';
const FileInput = ({ size, value, buttonName, label, error, placeholder, helper, required, className, onChange, }) => {
    const isError = !!error;
    const getLabelType = (value, error) => {
        if (value && !error)
            return 'value';
        if (value && error)
            return 'valueError';
        if (!value && !error)
            return 'placeholder';
        if (!value && error)
            return 'placeholderError';
    };
    return (_jsxs("div", { className: `flex flex-col ${className}`, children: [label && (_jsxs("label", { className: cn(LabelStyle({ size, isError })), children: [required && _jsx("span", { className: 'text-red-600', children: "*" }), " ", label] })), _jsxs("div", { className: 'relative flex w-full group', children: [_jsx("button", { className: cn(ButtonStyle({ size })), children: buttonName }), _jsx("label", { className: cn(InputLabelStyle({ size, type: getLabelType(value, error) })), children: _jsx("span", { className: 'block overflow-hidden whitespace-nowrap', children: value || placeholder }) }), _jsx("input", { type: 'file', onChange: (event) => event.target.files && onChange(event.target.files), className: 'absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-1' })] }), helper && _jsx("div", { className: cn(HelperStyle({ size })), children: helper }), _jsx("div", { className: cn(ErrorStyle({ size, isError })), children: error })] }));
};
export default memo(FileInput, (prev, next) => prev.size === next.size &&
    prev.value === next.value &&
    prev.buttonName === next.buttonName &&
    prev.label === next.label &&
    prev.error === next.error &&
    prev.placeholder === next.placeholder &&
    prev.helper === next.helper &&
    prev.required === next.required &&
    prev.className === next.className &&
    prev.onChange === next.onChange);
