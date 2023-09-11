'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { memo, useState } from 'react';
import { cn } from '../../utils/style';
import { ArrowStyle, BlankStyle, ButtonStyle, LabelStyle, ListStyle, SelectedStyle } from './style';
const Select = ({ size, items, selected, center = false, label, placeholder, className, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDown, setIsOpenDown] = useState(true);
    const getLabel = (items, selected) => {
        var _a;
        return (_a = items.filter((item) => item.value === selected)[0]) === null || _a === void 0 ? void 0 : _a.label;
    };
    const handleSelectOpen = (event) => {
        const root = document.getElementById('root');
        if (root) {
            const distanceFromBottom = root.clientHeight - event.clientY;
            setIsOpen((state) => !state);
            setIsOpenDown(distanceFromBottom > 340);
        }
    };
    return (_jsx("div", { className: className, children: _jsxs("div", { className: 'relative flex flex-col gap-2', onMouseLeave: () => setIsOpen(false), children: [label && _jsx("p", { className: cn(LabelStyle({ size })), children: label }), _jsx("div", { className: BlankStyle({ isOpenDown }) }), _jsxs("button", { type: 'button', onClick: handleSelectOpen, className: cn(SelectedStyle({ size })), children: [selected ? getLabel(items, selected) : placeholder, _jsx(ChevronDownIcon, { className: cn(ArrowStyle({ size })) })] }), isOpen && (_jsx("div", { className: ListStyle({ isOpenDown }), children: _jsx("ul", { className: 'flex flex-col p-1 text-base text-gray-700', children: items.map((item) => (_jsx("li", { onClick: () => {
                                onChange(item.value);
                                setIsOpen(false);
                            }, children: _jsx("button", { className: cn(ButtonStyle({ center })), children: item.label }) }, item.value))) }) }))] }) }));
};
export default memo(Select, (prev, next) => prev.size === next.size &&
    prev.selected === next.selected &&
    prev.items === next.items &&
    prev.center === next.center &&
    prev.label === next.label &&
    prev.placeholder === next.placeholder &&
    prev.className === next.className &&
    prev.onChange === next.onChange);
