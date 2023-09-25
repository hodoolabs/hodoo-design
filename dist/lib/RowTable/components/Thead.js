import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { memo } from 'react';
import { cn } from '../../../utils/style';
import { TableHeaderStyle } from '../style';
import CheckBox from '../../CheckBox/CheckBox';
import Tooltip from '../../Tooltip/Tooltip';
const Thead = ({ size, columns, dataSource, checkedList, sortDatas, onChecked, onSort }) => {
    return (_jsx("thead", { className: 'font-semibold text-gray-500 border-b border-gray-200 bg-gray-50', children: _jsxs("tr", { className: 'flex', children: [checkedList && (_jsx("th", { className: 'p-4 leading-none', children: onChecked && (_jsx(CheckBox, { checked: (checkedList === null || checkedList === void 0 ? void 0 : checkedList.length) === dataSource.length, onChange: () => (checkedList === null || checkedList === void 0 ? void 0 : checkedList.length) === dataSource.length
                            ? onChecked([])
                            : onChecked(dataSource.map((record) => record.id)) })) })), columns === null || columns === void 0 ? void 0 : columns.map((column, index) => (_jsxs("th", { className: cn(TableHeaderStyle({ size })), style: { width: `${column.width}%` }, children: [_jsx("span", { children: column.title }), column.sorter && (_jsx(ChevronUpDownIcon, { className: 'w-5 ml-2 cursor-pointer', onClick: () => onSort(dataSource, sortDatas, column.sorter) })), column.tooltip && (_jsx(Tooltip, Object.assign({}, column.tooltip, { className: 'inline-flex ml-2 item-center', children: _jsx(QuestionMarkCircleIcon, { className: 'w-5 text-gray-400 cursor-pointer' }) })))] }, index)))] }) }));
};
export default memo(Thead, (prev, next) => prev.size === next.size &&
    prev.columns === next.columns &&
    prev.dataSource === next.dataSource &&
    prev.checkedList === next.checkedList &&
    prev.sortDatas === next.sortDatas &&
    prev.onChecked === next.onChecked &&
    prev.onSort === next.onSort);
