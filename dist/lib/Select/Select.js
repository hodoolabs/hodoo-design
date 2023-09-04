'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { memo, useState } from 'react';
import { cn } from '../../utils/style';
import { ArrowStyle, BlankStyle, ButtonStyle, LabelStyle, ListStyle, SelectedStyle } from './style';
var Select = function (_a) {
    var size = _a.size, items = _a.items, selected = _a.selected, _b = _a.center, center = _b === void 0 ? false : _b, label = _a.label, placeholder = _a.placeholder, onChange = _a.onChange;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = useState(true), isOpenDown = _d[0], setIsOpenDown = _d[1];
    var getLabel = function (items, selected) {
        var _a;
        return (_a = items.filter(function (item) { return item.value === selected; })[0]) === null || _a === void 0 ? void 0 : _a.label;
    };
    var handleSelectOpen = function (event) {
        var root = document.getElementById('root');
        var distanceFromBottom = root.clientHeight - event.clientY;
        setIsOpen(function (state) { return !state; });
        setIsOpenDown(distanceFromBottom > 320);
    };
    return (_jsxs("div", { className: 'relative flex flex-col gap-2', onMouseLeave: function () { return setIsOpen(false); }, children: [label && _jsx("p", { className: cn(LabelStyle({ size: size })), children: label }), _jsx("div", { className: BlankStyle({ isOpenDown: isOpenDown }) }), _jsxs("button", { type: 'button', onClick: handleSelectOpen, className: cn(SelectedStyle({ size: size })), children: [selected ? getLabel(items, selected) : placeholder, _jsx(ChevronDownIcon, { className: cn(ArrowStyle({ size: size })) })] }), isOpen && (_jsx("div", { className: ListStyle({ isOpenDown: isOpenDown }), children: _jsx("ul", { className: 'flex flex-col p-1 text-base text-gray-700', children: items.map(function (item) { return (_jsx("li", { onClick: function () {
                            onChange(item.value);
                            setIsOpen(false);
                        }, children: _jsx("button", { className: cn(ButtonStyle({ center: center })), children: item.label }) }, item.value)); }) }) }))] }));
};
export default memo(Select, function (prev, next) {
    return prev.size === next.size &&
        prev.selected === next.selected &&
        prev.items === next.items &&
        prev.center === next.center &&
        prev.label === next.label &&
        prev.placeholder === next.placeholder &&
        prev.onChange === next.onChange;
});
