'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { cn } from '../../utils/style';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Helper from '../Helper/Helper';
import Label from '../Label/Label';
import { InputStyle } from './style';
const Input = ({ type = 'text', size = 'lg', label, value, error, maxLength, placeholder, helper, disabled, required, className, onBlur, onChange, onError, onEnter, }) => {
    useEffect(() => {
        if (!onError)
            return;
        onError('');
    }, [value]);
    return (_jsxs("div", { className: `flex flex-col ${className}`, children: [_jsx(Label, { size: size, value: value, error: error, label: label, maxLength: maxLength, disabled: disabled, required: required }), _jsx("input", { type: type, value: value, maxLength: maxLength, placeholder: placeholder, disabled: disabled, className: cn(InputStyle({ size, error: !!error })), onBlur: (event) => onBlur && onBlur(event.target.value), onChange: (event) => onChange && onChange(event.target.value), onKeyDown: (event) => event.key === 'Enter' && onEnter && onEnter() }), _jsx(Helper, { size: size, error: error, helper: helper, disabled: disabled }), _jsx(ErrorMessage, { size: size, error: error })] }));
};
export default Input;
