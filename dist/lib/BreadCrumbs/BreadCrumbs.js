'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';
const BreadCrumbs = ({ data, pathname, className, onPush }) => {
    return (_jsxs("div", { className: `flex gap-2 text-sm font-medium text-gray-500 ${className}`, children: [data[pathname].bread_crumbs.map((item) => (_jsxs("div", { className: 'flex items-center gap-2 leading-5', children: [_jsx("span", { onClick: () => onPush(item.url), className: 'rounded hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 cursor-pointer', children: item.label }), _jsx(ChevronRightIcon, { className: 'w-4 h-4' })] }, item.url))), _jsx("span", { className: 'text-gray-400', children: data[pathname].label })] }));
};
export default memo(BreadCrumbs, (prev, next) => prev.data === next.data &&
    prev.pathname === next.pathname &&
    prev.className === next.className &&
    prev.onPush === next.onPush);
