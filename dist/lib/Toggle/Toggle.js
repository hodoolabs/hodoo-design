'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import { HelperStyle, LabelStyle, ToogleBoxStyle } from './style';
const Toggle = ({ size, activated, label, helper, disabled = false, onChange }) => {
    return (_jsxs("label", { className: 'relative inline-flex gap-3', children: [_jsx("input", { type: 'checkbox', className: 'sr-only peer', checked: activated, disabled: disabled, onChange: () => !disabled && onChange(!activated) }), _jsx("div", { className: cn(ToogleBoxStyle({ size })) }), label && (_jsxs("div", { className: 'space-y-1 font-medium', children: [_jsx("p", { className: cn(LabelStyle({ disabled, size })), children: label }), helper && _jsx("p", { className: cn(HelperStyle({ disabled })), children: helper })] }))] }));
};
export default memo(Toggle, (prev, next) => prev.size === next.size &&
    prev.activated === next.activated &&
    prev.label === next.label &&
    prev.helper === next.helper &&
    prev.disabled === next.disabled &&
    prev.onChange === next.onChange);
