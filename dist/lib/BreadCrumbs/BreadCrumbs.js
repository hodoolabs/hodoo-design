'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
var BreadCrumbs = function (_a) {
    var data = _a.data;
    var location = useLocation();
    return (_jsxs("div", { className: 'flex gap-2 mb-3 text-sm font-medium text-gray-500', children: [data[location.pathname].bread_crumbs.map(function (item) { return (_jsxs("div", { className: 'flex items-center gap-2 leading-5', children: [_jsx(Link, { to: item.url, className: 'rounded hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2', children: item.label }), _jsx(ChevronRightIcon, { className: 'w-4 h-4' })] }, item.url)); }), _jsx("span", { children: data[location.pathname].label })] }));
};
export default BreadCrumbs;
