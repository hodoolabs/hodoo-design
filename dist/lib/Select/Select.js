'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { cn } from '../../utils/style';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Helper from '../Helper/Helper';
import Label from '../Label/Label';
import { ArrowStyle, BlankStyle, ItemStyle, ListStyle, SelectedStyle } from './style';
const Select = ({ size = 'lg', items, selected, error, center = false, label, placeholder, helper, disabled = false, required, className, onClick, onChange, onError, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [direction, setDirection] = useState('down');
    const getLabel = (items, selected) => {
        var _a;
        return (_a = items.filter((item) => item.value === selected)[0]) === null || _a === void 0 ? void 0 : _a.label;
    };
    const handleClickSelect = (event) => {
        const distanceFromBottom = document.body.clientHeight - event.clientY;
        setIsOpen((state) => !state);
        setDirection(distanceFromBottom > 340 ? 'down' : 'up');
    };
    useEffect(() => {
        if (!onError)
            return;
        onError('');
    }, [selected]);
    return (_jsxs("div", { className: `flex flex-col ${className}`, onMouseLeave: () => setIsOpen(false), children: [_jsx(Label, { size: size, error: error, label: label, disabled: disabled, required: required }), _jsxs("div", { className: 'relative w-full', children: [_jsxs("button", { type: 'button', onClick: (event) => {
                            onClick ? onClick() : handleClickSelect(event);
                            onError && onError('');
                        }, disabled: disabled, className: cn(SelectedStyle({ size, placeholder: !selected, error: !!error })), children: [selected ? getLabel(items, selected) : placeholder, _jsx(ChevronDownIcon, { className: cn(ArrowStyle({ size })) })] }), _jsx("div", { className: BlankStyle({ direction }) }), isOpen && !!items.length && (_jsx("div", { className: ListStyle({ direction }), children: _jsx("ul", { className: 'flex flex-col p-1 m-0', children: items.map((item, index) => (_jsx("li", { className: cn(ItemStyle({ center })), onClick: () => {
                                    onChange && onChange(item.value);
                                    setIsOpen(false);
                                }, children: item.label }, index))) }) }))] }), _jsx(Helper, { size: size, error: error, helper: helper, disabled: disabled }), _jsx(ErrorMessage, { size: size, error: error })] }));
};
export default Select;
