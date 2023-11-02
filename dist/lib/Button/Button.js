'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import { ButtonStyle, ImageStyle } from './style';
const Button = ({ color = 'black', size = 'lg', leftIcon, rightIcon, label, disabled, className, onClick, }) => {
    const iconOnly = !label ? size : null;
    return (_jsxs("button", { type: 'button', className: `${cn(ButtonStyle({ color, size, iconOnly }))} ${className}`, disabled: disabled, onClick: onClick, children: [leftIcon && _jsx("div", { className: cn(ImageStyle({ size, iconOnly })), children: leftIcon }), label && _jsx("span", { children: label }), rightIcon && _jsx("div", { className: cn(ImageStyle({ size, iconOnly })), children: rightIcon })] }));
};
export default memo(Button, (prev, next) => prev.color === next.color &&
    prev.size === next.size &&
    prev.leftIcon === next.leftIcon &&
    prev.rightIcon === next.rightIcon &&
    prev.label === next.label &&
    prev.disabled === next.disabled &&
    prev.className === next.className &&
    prev.onClick === next.onClick);
