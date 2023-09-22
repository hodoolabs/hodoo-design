'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import { ButtonStyle, ImageStyle, LabelStyle } from './style';
const Button = ({ color, size, leftIcon, rightIcon, label, disabled = false, isFull = false, className, onClick, }) => {
    return (_jsxs("button", { type: 'button', className: `${cn(ButtonStyle({ color, size, iconOnly: !label ? size : null, isFull }))} ${className}`, disabled: disabled, onClick: onClick, children: [leftIcon && (_jsx("div", { className: cn(ImageStyle({ size, color, iconOnly: !label ? size : null, disabled })), children: leftIcon })), label && _jsx("span", { className: cn(LabelStyle({ color, size, disabled })), children: label }), rightIcon && (_jsx("div", { className: cn(ImageStyle({ size, color, iconOnly: !label ? size : null, disabled })), children: rightIcon }))] }));
};
export default memo(Button, (prev, next) => prev.color === next.color &&
    prev.size === next.size &&
    prev.leftIcon === next.leftIcon &&
    prev.rightIcon === next.rightIcon &&
    prev.label === next.label &&
    prev.className === next.className &&
    prev.disabled === next.disabled &&
    prev.isFull === next.isFull &&
    prev.className === next.className &&
    prev.onClick === next.onClick);
