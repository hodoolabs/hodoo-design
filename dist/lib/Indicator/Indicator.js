'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import { IndicatorStyle } from './style';
var Indicator = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'default' : _b, legendWithText = _a.legendWithText, countText = _a.countText;
    return (_jsxs("div", { className: 'inline-flex items-center gap-2', children: [_jsx("div", { className: cn(IndicatorStyle({ type: type })), children: type === 'count' && countText }), type === 'legendWithText' && _jsx("p", { className: 'text-sm font-medium text-gray-700', children: legendWithText })] }));
};
export default memo(Indicator, function (prev, next) {
    return prev.type === next.type && prev.legendWithText === next.legendWithText && prev.countText === next.countText;
});
