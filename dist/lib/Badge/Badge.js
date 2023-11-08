'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '../../utils/style';
import { BadgeStyle, ButtonStyle, LeftImageStyle, RightImageStyle } from './style';
const Badge = ({ color = 'blue', size = 'sm', leftIcon, label, className, onClick }) => {
    const iconOnly = !label ? size : null;
    return (_jsxs("div", { className: `${cn(BadgeStyle({ color, size, iconOnly }))} ${className}`, children: [leftIcon && _jsx("div", { className: cn(LeftImageStyle({ size, iconOnly })), children: leftIcon }), label && _jsx("span", { children: label }), onClick && (_jsx("button", { type: 'button', className: cn(ButtonStyle({ color })), onClick: onClick, children: _jsx(XMarkIcon, { className: cn(RightImageStyle({ size })) }) }))] }));
};
export default Badge;
