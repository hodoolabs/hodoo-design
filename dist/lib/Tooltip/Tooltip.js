'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { cn } from '../../utils/style';
import VectorDarkSvg from './images/VectorDarkSvg';
import VectorWhiteSVG from './images/VectorWhiteSvg';
import { ArrowStyle, DescriptionStyle, TooltipBoxStyle, TooltipStyle } from './style';
import { throttle } from 'lodash';
const Tooltip = ({ color = 'dark', title, description, isShowArrow = true, children, position = 'top', className, }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipElement, setTooltipElement] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const targetRef = useRef(null);
    useEffect(() => {
        const element = document.createElement('div');
        document.body.appendChild(element);
        setTooltipElement(element);
        return () => {
            document.body.removeChild(element);
        };
    }, []);
    useEffect(() => {
        if (isHovered && targetRef.current) {
            const targetRect = targetRef.current.getBoundingClientRect();
            setTooltipPosition({
                top: targetRect.top + window.scrollY - (targetRect.height * 2) / 3,
                left: targetRect.left + window.scrollX + targetRect.width / 2,
            });
        }
    }, [isHovered]);
    useEffect(() => {
        const hideTooltipOnScroll = throttle(() => {
            setIsHovered(false);
        }, 200);
        window.addEventListener('scroll', hideTooltipOnScroll);
        window.addEventListener('touchmove', hideTooltipOnScroll);
        return () => {
            window.removeEventListener('scroll', hideTooltipOnScroll);
            window.removeEventListener('touchmove', hideTooltipOnScroll);
            hideTooltipOnScroll.cancel();
        };
    }, []);
    return (_jsxs("div", { className: `relative inline-block ${className}`, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), ref: targetRef, children: [_jsx("div", { children: children }), isHovered &&
                tooltipElement &&
                ReactDOM.createPortal(_jsx("div", { className: cn(TooltipBoxStyle({ position, isShowArrow: isShowArrow ? position : null })), style: { top: `${tooltipPosition.top}px`, left: `${tooltipPosition.left}px` }, children: _jsxs("div", { className: `${cn(TooltipStyle({ color }))}`, children: [_jsx("div", { children: title }), _jsx("div", { className: cn(DescriptionStyle({ color })), children: description }), isShowArrow && (_jsx("div", { className: cn(ArrowStyle({ position })), children: color === 'white' ? _jsx(VectorWhiteSVG, {}) : _jsx(VectorDarkSvg, {}) }))] }) }), tooltipElement)] }));
};
export default memo(Tooltip, (prev, next) => prev.color === next.color &&
    prev.title === next.title &&
    prev.description === next.description &&
    prev.isShowArrow === next.isShowArrow &&
    prev.children === next.children &&
    prev.position === next.position &&
    prev.className === next.className);
