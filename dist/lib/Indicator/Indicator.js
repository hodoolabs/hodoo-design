'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/style';
import { IndicatorStyle } from './style';
const Indicator = ({ label, count, isNew, className }) => {
    const getIndicatorText = () => {
        if (count)
            return count;
        if (isNew)
            return 'N';
    };
    return (_jsxs("div", { className: `inline-flex items-center gap-2 ${className}`, children: [_jsx("div", { className: cn(IndicatorStyle({ label: !!label, count: typeof count === 'number', isNew })), children: getIndicatorText() }), label && _jsx("p", { className: 'text-sm font-medium text-gray-700', children: label })] }));
};
export default Indicator;
