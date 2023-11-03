'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import CheckedDisabledSvg from './images/CheckedDisabledSvg';
import CheckedSvg from './images/CheckedSvg';
import { CheckBoxStyle, HelperStyle, LabelStyle } from './style';
const CheckBox = ({ checked, label, helper, disabled = false, className, onChange }) => {
    return (_jsxs("div", { className: `inline-flex gap-3 ${className}`, children: [_jsx("button", { className: cn(CheckBoxStyle({ checked })), disabled: disabled, onClick: () => onChange(!checked), children: checked && (disabled ? _jsx(CheckedDisabledSvg, {}) : _jsx(CheckedSvg, {})) }), label && (_jsxs("div", { className: 'flex flex-col gap-1', children: [_jsx("label", { className: cn(LabelStyle({ disabled })), onClick: () => !disabled && onChange(!checked), children: label }), helper && _jsx("p", { className: cn(HelperStyle({ disabled })), children: helper })] }))] }));
};
export default memo(CheckBox, (prev, next) => prev.checked === next.checked &&
    prev.label === next.label &&
    prev.helper === next.helper &&
    prev.disabled === next.disabled &&
    prev.className === next.className &&
    prev.onChange === next.onChange);
