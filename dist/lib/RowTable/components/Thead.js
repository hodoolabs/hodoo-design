'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import CheckBox from '../../CheckBox/CheckBox';
import Tooltip from '../../Tooltip/Tooltip';
const Thead = ({ columns, checkBox, sortDatas, onSort }) => {
    const selected = checkBox === null || checkBox === void 0 ? void 0 : checkBox.selected;
    const isAllCheck = (selected === null || selected === void 0 ? void 0 : selected.length) === sortDatas.length;
    const onSelect = (seleted) => {
        checkBox === null || checkBox === void 0 ? void 0 : checkBox.onSelect(seleted);
    };
    return (_jsx("thead", { className: 'text-sm font-semibold text-gray-500 border-b border-gray-200 bg-gray-50', children: _jsxs("tr", { className: 'flex', children: [checkBox && (_jsx("th", { className: 'p-4 leading-[0px]', children: _jsx(CheckBox, { checked: isAllCheck, onChange: () => (isAllCheck ? onSelect([]) : onSelect(sortDatas)) }) })), columns.map((column, index) => (_jsxs("th", { className: 'flex items-center gap-2 px-4 py-2', style: { width: `${column.width}%`, minWidth: column.minWidth }, children: [_jsx("span", { children: column.title }), column.sorter && (_jsx("div", { className: 'flex items-center justify-center cursor-pointer w-7 h-7', children: _jsx(ChevronUpDownIcon, { className: 'w-5 h-5', onClick: () => onSort(column.dataIndex) }) })), column.tooltip && (_jsx(Tooltip, Object.assign({}, column.tooltip, { className: 'flex items-center justify-center cursor-pointer w-7 h-7', children: _jsx(QuestionMarkCircleIcon, { className: 'w-5 text-gray-400 cursor-pointer' }) })))] }, index)))] }) }));
};
export default Thead;
