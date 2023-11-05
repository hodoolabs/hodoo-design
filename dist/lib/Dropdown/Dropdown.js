'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
const Dropdown = ({ isOpen, list, width, height, position = 'left', className, children, onSelect, onOpen, }) => {
    const ref = useRef(null);
    const [element, setElement] = useState();
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const handleSetPosition = (ref) => {
        if (!ref.current)
            return;
        const target = ref.current.getBoundingClientRect();
        setTop(target.top + target.height + 12);
        if (position === 'left')
            setLeft(target.left);
        if (position === 'right')
            setLeft(target.left - width + target.width);
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
        handleSetPosition(ref);
        const handleResizeWindow = () => {
            handleSetPosition(ref);
            onOpen(false);
        };
        global.window.addEventListener('resize', handleResizeWindow);
        return () => {
            global.window.removeEventListener('resize', handleResizeWindow);
        };
    }, [ref]);
    return (_jsxs("div", { ref: ref, className: `inline-block ${className}`, children: [children, isOpen &&
                element &&
                ReactDOM.createPortal(_jsx("div", { className: `absolute flex flex-col p-1 overflow-auto bg-white border border-gray-200 rounded-xl ${className}`, style: { top, left, width, height }, onMouseLeave: () => onOpen(false), children: list.map((item) => (_jsx("p", { className: 'px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700', onClick: () => onSelect(item.value), children: item.label }, item.value))) }), element)] }));
};
export default memo(Dropdown, (prev, next) => prev.isOpen === next.isOpen &&
    prev.list === next.list &&
    prev.width === next.width &&
    prev.height === next.height &&
    prev.position === next.position &&
    prev.className === next.className &&
    prev.children === next.children &&
    prev.onSelect === next.onSelect &&
    prev.onOpen === next.onOpen);
