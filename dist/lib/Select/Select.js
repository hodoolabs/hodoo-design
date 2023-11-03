'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { memo, useState } from 'react';
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import { ArrowStyle, BlankStyle, ItemStyle, LabelStyle, ListStyle, SelectedStyle } from './style';
const Select = ({ size = 'lg', items, selected, center = false, label, placeholder, required, className, onClick, onChange, }) => {
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
    return (_jsxs(SelectStyled, { className: `relative flex flex-col ${className}`, onMouseLeave: () => setIsOpen(false), children: [label && (_jsxs("label", { className: cn(LabelStyle({ size })), children: [required && _jsx("span", { className: 'text-red-600', children: "*" }), " ", label] })), _jsx("div", { className: BlankStyle({ direction }) }), _jsxs("button", { type: 'button', onClick: onClick || handleClickSelect, className: cn(SelectedStyle({ size, placeholder: !selected })), children: [selected ? getLabel(items, selected) : placeholder, _jsx(ChevronDownIcon, { className: cn(ArrowStyle({ size })) })] }), isOpen && (_jsx("div", { className: ListStyle({ direction }), children: _jsx("ul", { className: 'flex flex-col p-1', children: items.map((item) => (_jsx("li", { className: cn(ItemStyle({ center })), onClick: () => {
                            onChange(item.value);
                            setIsOpen(false);
                        }, children: item.label }, item.value))) }) }))] }));
};
export default memo(Select, (prev, next) => prev.size === next.size &&
    prev.items === next.items &&
    prev.selected === next.selected &&
    prev.center === next.center &&
    prev.label === next.label &&
    prev.placeholder === next.placeholder &&
    prev.className === next.className &&
    prev.onClick === next.onClick &&
    prev.onChange === next.onChange);
const SelectStyled = styled.div `
	.scroll-none::-webkit-scrollbar {
		display: none;
	}

	.scroll-none::-webkit-scrollbar-thumb {
		display: none;
	}
`;
