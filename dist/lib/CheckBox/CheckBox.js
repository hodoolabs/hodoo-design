'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import CheckedSvg from './CheckedSvg';
import CheckedDisabledSvg from './CheckedDisabledSvg';
import { CheckBoxStyle, HelperStyle, LabelStyle } from './style';
var CheckBox = function (_a) {
    var checked = _a.checked, label = _a.label, helper = _a.helper, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onChange = _a.onChange;
    return (_jsxs("div", { className: 'inline-flex gap-3', children: [_jsx("button", { className: cn(CheckBoxStyle({ checked: checked, disabled: disabled })), onClick: function () { return !disabled && onChange(!checked); }, children: checked && (disabled ? _jsx(CheckedDisabledSvg, {}) : _jsx(CheckedSvg, {})) }), label && (_jsxs("div", { className: 'space-y-1 font-medium', children: [_jsx("label", { className: cn(LabelStyle({ disabled: disabled })), onClick: function () { return !disabled && onChange(!checked); }, children: label }), helper && _jsx("p", { className: cn(HelperStyle({ disabled: disabled })), children: helper })] }))] }));
};
export default memo(CheckBox, function (prev, next) {
    return prev.checked === next.checked &&
        prev.label === next.label &&
        prev.helper === next.helper &&
        prev.disabled === next.disabled &&
        prev.onChange === next.onChange;
});
