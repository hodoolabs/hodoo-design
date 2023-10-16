'use client';
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { memo } from 'react';
import ReactDOM from 'react-dom';
const Dropdown = ({ element, top, left, list, onClick, setOpen }) => {
    return (_jsx(_Fragment, { children: ReactDOM.createPortal(_jsx("div", { className: 'absolute flex flex-col items-start w-64 p-1 overflow-auto bg-white border border-gray-200 h-fit max-h-80 rounded-xl', style: { top: `${top}px`, left: `${left}px` }, onMouseLeave: () => setOpen(false), children: list.map((name, index) => {
                return (_jsx("p", { className: 'flex items-center w-full px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700', onClick: () => onClick(name), children: name }, index));
            }) }), element) }));
};
export default memo(Dropdown, (prev, next) => prev.element === next.element &&
    prev.top === next.top &&
    prev.left === next.left &&
    prev.list === next.list &&
    prev.onClick === next.onClick &&
    prev.setOpen === next.setOpen);
