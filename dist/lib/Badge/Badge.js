'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';
import { cn } from '../../utils/style';
import { BadgeStyle, ButtonStyle, LabelStyle, LeftImageStyle, RightImageStyle } from './style';
var Badge = function (_a) {
    var color = _a.color, size = _a.size, leftIcon = _a.leftIcon, close = _a.close, label = _a.label, className = _a.className, onClick = _a.onClick;
    return (_jsxs("div", { className: "".concat(cn(BadgeStyle({ color: color, size: size, iconOnly: !label ? size : null })), " ").concat(className), children: [leftIcon && _jsx("div", { className: cn(LeftImageStyle({ color: color, size: size })), children: leftIcon }), label && _jsx("span", { className: cn(LabelStyle({ color: color })), children: label }), close && (_jsx("button", { type: 'button', className: cn(ButtonStyle({ color: color })), onClick: onClick, children: _jsx(XMarkIcon, { className: cn(RightImageStyle({ color: color, size: size })) }) }))] }));
};
export default memo(Badge, function (prev, next) {
    return prev.color === next.color &&
        prev.size === next.size &&
        prev.leftIcon === next.leftIcon &&
        prev.close === next.close &&
        prev.label === next.label &&
        prev.className === next.className &&
        prev.onClick === next.onClick;
});
