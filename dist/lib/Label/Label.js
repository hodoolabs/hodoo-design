'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cn } from '../../utils/style';
import { LabelStyle, MaxLengthStyle, RequiredStyle } from './style';
const Label = ({ size = 'lg', value = '', error, label, maxLength, disabled = false, required }) => {
    const isError = !!error;
    return (_jsx(_Fragment, { children: label && (_jsxs("label", { className: cn(LabelStyle({ size, isError, disabled })), children: [required && _jsx("span", { className: cn(RequiredStyle({ disabled })), children: "*" }), " ", label, maxLength && (_jsxs("span", { className: cn(MaxLengthStyle({ isError })), children: [(value === null || value === void 0 ? void 0 : value.length) || 0, "/", maxLength] }))] })) }));
};
export default Label;
