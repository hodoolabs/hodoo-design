'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import { ButtonStyle, ImageStyle, LabelStyle } from './style';
var Button = function (_a) {
    var color = _a.color, size = _a.size, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, label = _a.label, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.isFull, isFull = _c === void 0 ? false : _c, className = _a.className, onClick = _a.onClick;
    return (_jsxs("button", { type: 'button', className: "".concat(cn(ButtonStyle({ color: color, size: size, iconOnly: !label ? size : null, isFull: isFull })), " ").concat(className), disabled: disabled, onClick: onClick, children: [leftIcon && (_jsx("div", { className: cn(ImageStyle({ size: size, color: color, iconOnly: !label ? size : null, disabled: disabled })), children: leftIcon })), label && _jsx("span", { className: cn(LabelStyle({ color: color, size: size, disabled: disabled })), children: label }), rightIcon && (_jsx("div", { className: cn(ImageStyle({ size: size, color: color, iconOnly: !label ? size : null, disabled: disabled })), children: rightIcon }))] }));
};
export default memo(Button, function (prev, next) {
    return prev.color === next.color &&
        prev.size === next.size &&
        prev.leftIcon === next.leftIcon &&
        prev.rightIcon === next.rightIcon &&
        prev.label === next.label &&
        prev.className === next.className &&
        prev.disabled === next.disabled &&
        prev.isFull === next.isFull &&
        prev.className === next.className &&
        prev.onClick === next.onClick;
});
