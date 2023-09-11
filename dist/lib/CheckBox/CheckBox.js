'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import { CheckBoxStyle, HelperStyle, LabelStyle } from './style';
import CheckedDisabledSvg from './CheckedDisabledSvg';
import CheckedSvg from './CheckedSvg';
const CheckBox = ({ checked, label, helper, disabled = false, onChange }) => {
    return (_jsxs("div", { className: 'inline-flex gap-3', children: [_jsx("button", { className: cn(CheckBoxStyle({ checked, disabled })), onClick: () => !disabled && onChange(!checked), children: checked && (disabled ? _jsx(CheckedDisabledSvg, {}) : _jsx(CheckedSvg, {})) }), label && (_jsxs("div", { className: 'space-y-1 font-medium', children: [_jsx("label", { className: cn(LabelStyle({ disabled })), onClick: () => !disabled && onChange(!checked), children: label }), helper && _jsx("p", { className: cn(HelperStyle({ disabled })), children: helper })] }))] }));
};
export default memo(CheckBox, (prev, next) => prev.checked === next.checked &&
    prev.label === next.label &&
    prev.helper === next.helper &&
    prev.disabled === next.disabled &&
    prev.onChange === next.onChange);
