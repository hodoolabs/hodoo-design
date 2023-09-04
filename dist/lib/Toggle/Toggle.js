'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import { HelperStyle, LabelStyle, ToogleBoxStyle } from './style';
var Toggle = function (_a) {
    var size = _a.size, activated = _a.activated, label = _a.label, helper = _a.helper, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onChange = _a.onChange;
    return (_jsxs("label", { className: 'relative inline-flex gap-3', children: [_jsx("input", { type: 'checkbox', className: 'sr-only peer', checked: activated, disabled: disabled, onChange: function () { return !disabled && onChange(!activated); } }), _jsx("div", { className: cn(ToogleBoxStyle({ size: size })) }), label && (_jsxs("div", { className: 'space-y-1 font-medium', children: [_jsx("p", { className: cn(LabelStyle({ disabled: disabled, size: size })), children: label }), helper && _jsx("p", { className: cn(HelperStyle({ disabled: disabled })), children: helper })] }))] }));
};
export default memo(Toggle, function (prev, next) {
    return prev.size === next.size &&
        prev.activated === next.activated &&
        prev.label === next.label &&
        prev.helper === next.helper &&
        prev.disabled === next.disabled &&
        prev.onChange === next.onChange;
});
