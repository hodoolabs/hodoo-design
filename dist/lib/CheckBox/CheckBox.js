'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/style';
import CheckedDisabledSvg from './images/CheckedDisabledSvg';
import CheckedSvg from './images/CheckedSvg';
import { CheckBoxStyle, HelperStyle, LabelStyle } from './style';
const CheckBox = ({ checked, color, label, helper, error = false, disabled = false, className, onChange, }) => {
    return (_jsxs("div", { className: `inline-flex gap-3 ${className}`, children: [_jsx("button", { className: cn(CheckBoxStyle({ checked, error })), disabled: disabled, onClick: () => onChange(!checked), children: checked && (disabled ? _jsx(CheckedDisabledSvg, {}) : _jsx(CheckedSvg, { color: color })) }), label && (_jsxs("div", { className: 'flex flex-col gap-1', children: [_jsx("label", { className: cn(LabelStyle({ disabled, error })), onClick: () => !disabled && onChange(!checked), children: label }), helper && _jsx("p", { className: cn(HelperStyle({ disabled, error })), children: helper })] }))] }));
};
export default CheckBox;
