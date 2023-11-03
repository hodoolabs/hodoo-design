'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import RadioDisabledSvg from './images/RadioDisabledSvg';
import RadioSvg from './images/RadioSvg';
import { HelperStyle, LabelStyle, RadioStyle } from './style';
const Radio = ({ id, selected, label, helper, disabled = false, className, onChange }) => {
    const isSelected = id === selected;
    return (_jsxs("div", { className: `inline-flex gap-3 ${className}`, children: [_jsx("button", { className: cn(RadioStyle({ isSelected })), disabled: disabled, onClick: () => onChange(id), children: isSelected && (disabled ? _jsx(RadioDisabledSvg, {}) : _jsx(RadioSvg, {})) }), label && (_jsxs("div", { className: 'flex flex-col gap-1', children: [_jsx("label", { className: cn(LabelStyle({ disabled })), onClick: () => !disabled && onChange(id), children: label }), helper && _jsx("p", { className: cn(HelperStyle({ disabled })), children: helper })] }))] }));
};
export default memo(Radio, (prev, next) => prev.id === next.id &&
    prev.selected === next.selected &&
    prev.label === next.label &&
    prev.helper === next.helper &&
    prev.disabled === next.disabled &&
    prev.className === next.className &&
    prev.onChange === next.onChange);
