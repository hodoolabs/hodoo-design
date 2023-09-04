'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect } from 'react';
import { cn } from '../../utils/style';
import { ErrorStyle, HelperStyle, InputStyle, LabelStyle, MaxLengthStyle } from './style';
var Input = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'text' : _b, size = _a.size, label = _a.label, value = _a.value, error = _a.error, maxLength = _a.maxLength, placeholder = _a.placeholder, helper = _a.helper, disabled = _a.disabled, required = _a.required, onChange = _a.onChange, onError = _a.onError, onEnter = _a.onEnter;
    useEffect(function () {
        if (!onError)
            return;
        onError('');
    }, [value]);
    return (_jsxs("div", { className: 'w-full', children: [label && (_jsxs("label", { className: cn(LabelStyle({ size: size, error: !!error })), children: [required && _jsx("span", { className: 'text-red-600', children: "*" }), " ", label, maxLength && (_jsxs("span", { className: cn(MaxLengthStyle({ error: !!error })), children: [value.length, "/", maxLength] }))] })), _jsx("input", { className: cn(InputStyle({ size: size, error: !!error })), type: type, value: value, maxLength: maxLength, placeholder: placeholder, disabled: disabled, onChange: function (event) { return onChange && onChange(event.target.value); }, onKeyDown: function (event) { return event.key === 'Enter' && onEnter && onEnter(); } }), helper && _jsx("div", { className: cn(HelperStyle({ size: size })), children: helper }), _jsx("div", { className: cn(ErrorStyle({ size: size, error: !!error })), children: error })] }));
};
export default memo(Input, function (prev, next) {
    return prev.type === next.type &&
        prev.size === next.size &&
        prev.label === next.label &&
        prev.value === next.value &&
        prev.error === next.error &&
        prev.maxLength === next.maxLength &&
        prev.placeholder === next.placeholder &&
        prev.helper === next.helper &&
        prev.disabled === next.disabled &&
        prev.required === next.required &&
        prev.onChange === next.onChange &&
        prev.onError === next.onError &&
        prev.onEnter === next.onEnter;
});
