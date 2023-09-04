'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import RadioSvg from './RadioSvg';
import RadioDisabledSvg from './RadioDisabledSvg';
import { HelperStyle, LabelStyle, RadioStyle } from './style';
var Radio = function (_a) {
    var id = _a.id, selected = _a.selected, label = _a.label, helper = _a.helper, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onChange = _a.onChange;
    return (_jsxs("div", { className: 'inline-flex gap-3', children: [_jsx("button", { className: cn(RadioStyle({ selected: id === selected, disabled: disabled })), onClick: function () { return !disabled && onChange && onChange(id); }, children: id === selected && (disabled ? _jsx(RadioSvg, {}) : _jsx(RadioDisabledSvg, {})) }), label && (_jsxs("div", { className: 'space-y-1 font-medium', children: [_jsx("label", { className: cn(LabelStyle({ disabled: disabled })), onClick: function () { return !disabled && onChange && onChange(id); }, children: label }), helper && _jsx("p", { className: cn(HelperStyle({ disabled: disabled })), children: helper })] }))] }));
};
export default memo(Radio, function (prev, next) {
    return prev.id === next.id &&
        prev.selected === next.selected &&
        prev.label === next.label &&
        prev.helper === next.helper &&
        prev.disabled === next.disabled &&
        prev.onChange === next.onChange;
});
