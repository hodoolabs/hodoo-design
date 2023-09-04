'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect } from 'react';
import { cn } from '../../utils/style';
import { ErrorStyle, HelperStyle, LabelStyle, MaxLengthStyle, TextareaStyle } from './style';
var TextArea = function (_a) {
    var size = _a.size, label = _a.label, value = _a.value, error = _a.error, maxLength = _a.maxLength, placeholder = _a.placeholder, helper = _a.helper, disabled = _a.disabled, height = _a.height, required = _a.required, onChange = _a.onChange, onError = _a.onError;
    useEffect(function () {
        if (!onError)
            return;
        onError('');
    }, [value]);
    return (_jsxs("div", { className: 'flex flex-col resize-none', children: [label && (_jsxs("label", { className: cn(LabelStyle({ size: size, error: !!error })), children: [required && _jsx("span", { className: 'text-red-600', children: "*" }), " ", label, maxLength && (_jsxs("span", { className: cn(MaxLengthStyle({ error: !!error })), children: [value.length, "/", maxLength] }))] })), _jsx("textarea", { className: cn(TextareaStyle({ size: size, error: !!error })), value: value, maxLength: maxLength, placeholder: placeholder, disabled: disabled, onChange: function (event) { return onChange && onChange(event.target.value); }, style: { height: height } }), helper && _jsx("div", { className: cn(HelperStyle({ size: size })), children: helper }), _jsx("div", { className: cn(ErrorStyle({ size: size, error: !!error })), children: error })] }));
};
export default memo(TextArea, function (prev, next) {
    return prev.size === next.size &&
        prev.label === next.label &&
        prev.value === next.value &&
        prev.error === next.error &&
        prev.maxLength === next.maxLength &&
        prev.placeholder === next.placeholder &&
        prev.helper === next.helper &&
        prev.disabled === next.disabled &&
        prev.height === next.height &&
        prev.required === next.required &&
        prev.onChange === next.onChange &&
        prev.onError === next.onError;
});
