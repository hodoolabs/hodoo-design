'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import VectorDarkSvg from './images/VectorDarkSvg';
import VectorWhiteSVG from './images/VectorWhiteSvg';
import { ArrowStyle, DescriptionStyle, TooltipBoxStyle, TooltipStyle } from './style';
const Tooltip = ({ color, title, description, isShowArrow, children, position }) => {
    return (_jsxs("div", { className: 'relative inline-block', children: [_jsx("div", { className: 'peer', children: children }), _jsx("div", { className: cn(TooltipBoxStyle({ position, isShowArrow: isShowArrow ? position : null })), children: _jsxs("div", { className: `${cn(TooltipStyle({ color }))}`, children: [_jsx("p", { children: title }), _jsx("div", { className: cn(DescriptionStyle({ color })), children: description }), isShowArrow && (_jsx("div", { className: cn(ArrowStyle({ position })), children: color === 'white' ? _jsx(VectorWhiteSVG, {}) : _jsx(VectorDarkSvg, {}) }))] }) })] }));
};
export default memo(Tooltip, (prev, next) => prev.color === next.color &&
    prev.title === next.title &&
    prev.description === next.description &&
    prev.isShowArrow === next.isShowArrow &&
    prev.children === next.children &&
    prev.position === next.position);
