'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { cn } from '../../utils/style';
import VectorDarkSvg from './images/VectorDarkSvg';
import VectorWhiteSVG from './images/VectorWhiteSvg';
import { ArrowStyle, DescriptionStyle, TooltipStyle, WrapStyle } from './style';
const Tooltip = ({ color = 'dark', title, description, isShowArrow = true, children, position = 'top', className, }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [element, setElement] = useState();
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const handleSetPosition = (ref) => {
        if (!ref.current)
            return;
        const target = ref.current.getBoundingClientRect();
        const gap = 12;
        if (position === 'top') {
            setTop(target.top - gap);
            setLeft(target.left + target.width / 2);
        }
        if (position === 'left') {
            setTop(target.top + target.height / 2);
            setLeft(target.left - gap);
        }
        if (position === 'right') {
            setTop(target.top + target.height / 2);
            setLeft(target.right + gap);
        }
        if (position === 'bottom') {
            setTop(target.bottom + gap);
            setLeft(target.left + target.width / 2);
        }
    };
    useEffect(() => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        setElement(div);
        return () => {
            document.body.removeChild(div);
        };
    }, []);
    useEffect(() => {
        const tooltip = document.getElementById('tooltip');
        const table = document.getElementById('table');
        handleSetPosition(ref);
        const handlehideTooltip = () => {
            handleSetPosition(ref);
            setIsHovered(false);
        };
        tooltip === null || tooltip === void 0 ? void 0 : tooltip.addEventListener('scroll', handlehideTooltip);
        table === null || table === void 0 ? void 0 : table.addEventListener('scroll', handlehideTooltip);
        global.window.addEventListener('resize', handlehideTooltip);
        return () => {
            tooltip === null || tooltip === void 0 ? void 0 : tooltip.removeEventListener('scroll', handlehideTooltip);
            table === null || table === void 0 ? void 0 : table.removeEventListener('scroll', handlehideTooltip);
            global.window.addEventListener('resize', handlehideTooltip);
        };
    }, [ref]);
    return (_jsxs("div", { className: `relative inline-block ${className}`, ref: ref, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [children, isHovered &&
                element &&
                ReactDOM.createPortal(_jsx("div", { className: cn(TooltipStyle({ position })), style: { top, left }, children: _jsxs("div", { className: `${cn(WrapStyle({ color }))}`, children: [_jsx("div", { children: title }), _jsx("div", { className: cn(DescriptionStyle({ color })), children: description }), isShowArrow && (_jsx("div", { className: cn(ArrowStyle({ position })), children: color === 'white' ? _jsx(VectorWhiteSVG, {}) : _jsx(VectorDarkSvg, {}) }))] }) }), element)] }));
};
export default Tooltip;
