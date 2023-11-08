'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/style';
import { LabelStyle, MaxLengthStyle, RequiredStyle } from './style';
const Label = ({ size = 'lg', value = '', error, label, maxLength, disabled = false, required }) => {
    return (label && (_jsxs("label", { className: cn(LabelStyle({ size, error: !!error, disabled })), children: [required && _jsx("span", { className: cn(RequiredStyle({ disabled })), children: "*" }), " ", label, maxLength && (_jsxs("span", { className: cn(MaxLengthStyle({ error: !!error })), children: [value.length, "/", maxLength] }))] })));
};
export default Label;
