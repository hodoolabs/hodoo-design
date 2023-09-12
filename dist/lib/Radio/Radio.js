'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import { HelperStyle, LabelStyle, RadioStyle } from './style';
import RadioDisabledSvg from './images/RadioDisabledSvg';
import RadioSvg from './images/RadioSvg';
const Radio = ({ id, selected, label, helper, disabled = false, onChange }) => {
    return (_jsxs("div", { className: 'inline-flex gap-3', children: [_jsx("button", { className: cn(RadioStyle({ selected: id === selected, disabled })), onClick: () => !disabled && onChange && onChange(id), children: id === selected && (disabled ? _jsx(RadioDisabledSvg, {}) : _jsx(RadioSvg, {})) }), label && (_jsxs("div", { className: 'space-y-1 font-medium', children: [_jsx("label", { className: cn(LabelStyle({ disabled })), onClick: () => !disabled && onChange && onChange(id), children: label }), helper && _jsx("p", { className: cn(HelperStyle({ disabled })), children: helper })] }))] }));
};
export default memo(Radio, (prev, next) => prev.id === next.id &&
    prev.selected === next.selected &&
    prev.label === next.label &&
    prev.helper === next.helper &&
    prev.disabled === next.disabled &&
    prev.onChange === next.onChange);
