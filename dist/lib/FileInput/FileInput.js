'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/style';
import Label from '../Label/Label';
import { ButtonStyle, InputLabelStyle } from './style';
import Helper from '../Helper/Helper';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
const FileInput = ({ size = 'lg', value, buttonName, accept, label, error, placeholder, helper, required, multiple = false, disabled = false, className, onChange, }) => {
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
    return (_jsxs("div", { className: `flex flex-col ${className}`, children: [_jsx(Label, { size: size, error: error, label: label, disabled: disabled, required: required }), _jsxs("div", { className: 'relative flex w-full group', children: [_jsx("button", { className: cn(ButtonStyle({ size })), children: buttonName }), _jsx("label", { className: cn(InputLabelStyle({ size, type: getLabelType(value, error) })), children: _jsx("span", { className: 'block overflow-hidden whitespace-nowrap', children: value || placeholder }) }), _jsx("input", { accept: accept, type: 'file', multiple: multiple, onChange: (event) => event.target.files && onChange(event.target.files), className: 'absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-1' })] }), _jsx(Helper, { size: size, error: error, helper: helper, disabled: disabled }), _jsx(ErrorMessage, { size: size, error: error })] }));
};
export default FileInput;
