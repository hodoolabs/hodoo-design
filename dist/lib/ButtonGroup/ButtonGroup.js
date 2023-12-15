'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/style';
import { ButtonStyle } from './style';
const ButtonGroup = ({ buttons, active, className, onActive }) => {
    return (_jsx("div", { className: className, children: buttons.map((button) => (_jsx("button", { className: cn(ButtonStyle({ active: active === button.value })), onClick: () => onActive(button.value), children: button.label }, button.value))) }));
};
export default ButtonGroup;
