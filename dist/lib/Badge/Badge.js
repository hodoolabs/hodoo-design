'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';
import { cn } from '../../utils/style';
import { BadgeStyle, ButtonStyle, LabelStyle, LeftImageStyle, RightImageStyle } from './style';
const Badge = ({ color, size, leftIcon, close, label, className, onClick }) => {
    return (_jsxs("div", { className: `${cn(BadgeStyle({ color, size, iconOnly: !label ? size : null }))} ${className}`, children: [leftIcon && _jsx("div", { className: cn(LeftImageStyle({ color, size })), children: leftIcon }), label && _jsx("span", { className: cn(LabelStyle({ color })), children: label }), close && (_jsx("button", { type: 'button', className: cn(ButtonStyle({ color })), onClick: onClick, children: _jsx(XMarkIcon, { className: cn(RightImageStyle({ color, size })) }) }))] }));
};
export default memo(Badge, (prev, next) => prev.color === next.color &&
    prev.size === next.size &&
    prev.leftIcon === next.leftIcon &&
    prev.close === next.close &&
    prev.label === next.label &&
    prev.className === next.className &&
    prev.onClick === next.onClick);
