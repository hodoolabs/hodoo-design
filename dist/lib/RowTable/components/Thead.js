import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { memo } from 'react';
import Tooltip from '../../Tooltip/Tooltip';
const Thead = ({ columns, dataSource, sortDatas, onSort }) => {
    return (_jsx("thead", { className: 'text-sm font-semibold text-gray-500 border-b border-gray-200 bg-gray-50', children: _jsx("tr", { className: 'flex', children: columns.map((column, index) => (_jsxs("th", { className: 'flex items-center gap-2 px-4 py-2', style: { width: `${column.width}%` }, children: [_jsx("span", { children: column.title }), column.sorter && (_jsx("div", { className: 'flex items-center justify-center cursor-pointer w-7 h-7', children: _jsx(ChevronUpDownIcon, { className: 'w-5 h-5', onClick: () => onSort(dataSource, sortDatas, column.sorter) }) })), column.tooltip && (_jsx(Tooltip, Object.assign({}, column.tooltip, { className: 'flex items-center justify-center cursor-pointer w-7 h-7', children: _jsx(QuestionMarkCircleIcon, { className: 'w-5 text-gray-400 cursor-pointer' }) })))] }, index))) }) }));
};
export default memo(Thead, (prev, next) => prev.columns === next.columns &&
    prev.dataSource === next.dataSource &&
    prev.sortDatas === next.sortDatas &&
    prev.onSort === next.onSort);
