'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';
const BreadCrumbs = ({ data, path, className, onPush }) => {
    return (_jsxs("div", { className: `flex gap-2 text-sm font-medium text-gray-500 ${className}`, children: [data[path].bread_crumbs.map((item) => (_jsxs("div", { className: 'flex items-center gap-2', children: [_jsx("span", { onClick: () => onPush(item.path), className: 'rounded hover:text-gray-700 cursor-pointer', children: item.label }), _jsx(ChevronRightIcon, { className: 'w-4 h-4' })] }, item.path))), _jsx("span", { className: 'text-gray-400', children: data[path].label })] }));
};
export default memo(BreadCrumbs, (prev, next) => prev.data === next.data &&
    prev.path === next.path &&
    prev.className === next.className &&
    prev.onPush === next.onPush);
