'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ChevronRightIcon } from '@heroicons/react/24/outline';
const BreadCrumbs = ({ data, path, className, onPush }) => {
    var _a;
    const breadCrumbs = (_a = data[path]) === null || _a === void 0 ? void 0 : _a.bread_crumbs;
    return (_jsx(_Fragment, { children: !!(breadCrumbs === null || breadCrumbs === void 0 ? void 0 : breadCrumbs.length) && (_jsxs("div", { className: `flex gap-2 text-sm font-medium text-gray-500 ${className}`, children: [breadCrumbs === null || breadCrumbs === void 0 ? void 0 : breadCrumbs.map((item) => (_jsxs("div", { className: 'flex items-center gap-2', children: [item.path ? (_jsx("span", { onClick: () => item.path && onPush(item.path), className: 'rounded cursor-pointer hover:text-gray-700', children: item.label })) : (_jsx("span", { className: 'text-gray-400', children: item.label })), _jsx(ChevronRightIcon, { className: 'w-4 h-4' })] }, item.path))), _jsx("span", { className: 'text-gray-400', children: data[path].label })] })) }));
};
export default BreadCrumbs;
