'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/style';
import { ButtonStyle, ImageStyle } from './style';
const Button = ({ color = 'black', size = 'lg', leftIcon, rightIcon, label, disabled, className, onClick, }) => {
    const iconOnly = !label ? size : null;
    return (_jsxs("button", { type: 'button', className: `${cn(ButtonStyle({ color, size, iconOnly, disabled }))} ${className}`, disabled: disabled, onClick: (e) => onClick && onClick(e), children: [leftIcon && _jsx("div", { className: cn(ImageStyle({ size, iconOnly })), children: leftIcon }), label && _jsx("span", { children: label }), rightIcon && _jsx("div", { className: cn(ImageStyle({ size, iconOnly })), children: rightIcon })] }));
};
export default Button;
