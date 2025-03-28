'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
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
        if (typeof window === 'undefined')
            return;
        const div = document.createElement('div');
        document.body.appendChild(div);
        setElement(div);
        return () => {
            if (document.body.contains(div)) {
                document.body.removeChild(div);
            }
        };
    }, []);
    useEffect(() => {
        handleSetPosition(ref);
        const handleResizeWindow = () => {
            handleSetPosition(ref);
            onOpen(false);
        };
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResizeWindow);
            return () => {
                window.removeEventListener('resize', handleResizeWindow);
            };
        }
    }, [ref, onOpen]);
    return (_jsxs("div", { ref: ref, className: `inline-block ${className}`, children: [children, isOpen &&
                element &&
                ReactDOM.createPortal(_jsx("div", { className: `absolute flex flex-col p-1 overflow-auto bg-white border border-gray-200 rounded-xl ${className}`, style: { top, left, width, height }, onMouseLeave: () => onOpen(false), children: list.map((item) => (_jsx("p", { className: 'px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700', onClick: () => onSelect(item.value, item.label), children: item.label }, item.value))) }), element)] }));
};
export default Dropdown;
