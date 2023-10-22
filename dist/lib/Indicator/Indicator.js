'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import { IndicatorStyle } from './style';
const Indicator = ({ label, count }) => {
    return (_jsxs("div", { className: 'inline-flex items-center gap-2', children: [_jsx("div", { className: cn(IndicatorStyle({ label: !!label, count: typeof count === 'number' })), children: count !== null && count !== void 0 ? count : '' }), label && _jsx("p", { className: 'text-sm font-medium text-gray-700', children: label })] }));
};
export default memo(Indicator, (prev, next) => prev.label === next.label && prev.count === next.count);
