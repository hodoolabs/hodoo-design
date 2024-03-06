'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/style';
import { HelperStyle, LabelStyle, ToggleBoxStyle } from './style';
const Toggle = ({ size = 'sm', activated, label, helper, disabled = false, className, onChange }) => {
    return (_jsx("div", { className: `flex items-center ${className}`, children: _jsxs("label", { className: 'relative inline-flex items-center gap-3', children: [_jsx("input", { type: 'checkbox', className: 'sr-only peer', checked: activated, disabled: disabled, onChange: () => onChange(!activated) }), _jsx("div", { className: cn(ToggleBoxStyle({ size })) }), label && (_jsxs("div", { children: [_jsx("div", { className: cn(LabelStyle({ size, disabled })), children: label }), helper && _jsx("p", { className: cn(HelperStyle({ disabled })), children: helper })] }))] }) }));
};
export default Toggle;
