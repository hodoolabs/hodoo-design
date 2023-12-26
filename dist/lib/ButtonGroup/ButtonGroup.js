'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { cn } from '../../utils/style';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Helper from '../Helper/Helper';
import Label from '../Label/Label';
import { ButtonStyle } from './style';
const ButtonGroup = ({ type = 'primary', active, error, buttons, label, helper, disabled, required, className, onActive, onError, }) => {
    useEffect(() => {
        if (!onError)
            return;
        onError('');
    }, [active]);
    return (_jsxs("div", { className: `flex flex-col ${className}`, children: [_jsx(Label, { error: error, label: label, disabled: disabled, required: required }), type === 'primary' ? (_jsx("div", { children: buttons.map((button) => (_jsx("button", { disabled: disabled, className: cn(ButtonStyle({ active: active === button.value })), onClick: () => onActive(button.value), children: button.label }, button.value))) })) : type === 'secondary' ? (_jsx("div", { className: 'flex gap-2', children: buttons.map((item) => (_jsx(Button, { color: active !== item.value ? 'white_line' : 'blue', size: 'md', label: item.label, disabled: active !== item.value && disabled, onClick: () => onActive(item.value) }, item.value))) })) : null, _jsx(Helper, { size: 'lg', error: error, helper: helper, disabled: disabled }), _jsx(ErrorMessage, { size: 'lg', error: error })] }));
};
export default ButtonGroup;
