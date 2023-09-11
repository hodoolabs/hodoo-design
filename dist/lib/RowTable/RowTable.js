'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { memo, useState } from 'react';
import { cn } from '../../utils/style';
import CheckBox from '../CheckBox/CheckBox';
import { TableBodyStyle, TableHeaderStyle } from './style';
const RowTable = ({ size, columns, dataSource, rowSelections }) => {
    const [sortDatas, setSortDatas] = useState(dataSource);
    const selectedRowKeys = rowSelections === null || rowSelections === void 0 ? void 0 : rowSelections.selectedRowKeys;
    const onselect = rowSelections === null || rowSelections === void 0 ? void 0 : rowSelections.onselect;
    const handleSortDatas = (dataSource, sortDatas, sorter) => {
        const isSorted = JSON.stringify(dataSource) !== JSON.stringify(sortDatas);
        setSortDatas(isSorted ? dataSource : [...dataSource].sort(sorter));
    };
    return (_jsxs("table", { className: 'w-full', children: [_jsx("thead", { className: 'font-semibold text-gray-500 border-b border-gray-200 bg-gray-50', children: _jsxs("tr", { className: 'flex w-full', children: [rowSelections && (_jsx("th", { className: 'p-4 leading-none', children: onselect && (_jsx(CheckBox, { checked: (selectedRowKeys === null || selectedRowKeys === void 0 ? void 0 : selectedRowKeys.length) === dataSource.length, onChange: () => (selectedRowKeys === null || selectedRowKeys === void 0 ? void 0 : selectedRowKeys.length) === dataSource.length
                                    ? onselect([])
                                    : onselect(dataSource.map((record) => record.id)) })) })), columns &&
                            columns.map((column) => (_jsxs("th", { className: cn(TableHeaderStyle({ size })), style: { width: `${column.width}%` }, children: [_jsx("span", { children: column.title }), column.sorter && (_jsx(ChevronUpDownIcon, { className: 'w-5 cursor-pointer', onClick: () => handleSortDatas(dataSource, sortDatas, column.sorter) }))] }, column.dataIndex)))] }) }), _jsx("tbody", { children: sortDatas.map((record) => (_jsxs("tr", { className: 'flex items-center font-medium border-b border-solid border-b-gray-200 hover:bg-blue-50 hover:text-gray-900 hover:border-blue-300', children: [rowSelections && (_jsx("td", { className: 'p-4 leading-none', children: selectedRowKeys && onselect && (_jsx(CheckBox, { checked: selectedRowKeys.includes(record.id), onChange: () => {
                                    const newSelectedKeys = selectedRowKeys.includes(record.id)
                                        ? selectedRowKeys.filter((key) => key !== record.id)
                                        : [...selectedRowKeys, record.id];
                                    onselect(newSelectedKeys);
                                } })) })), columns.map((column, index) => (_jsx("td", { className: cn(TableBodyStyle({ size })), style: { width: `${column.width}%` }, children: record[column.dataIndex] }, index)))] }, record.id))) })] }));
};
export default memo(RowTable, (prev, next) => {
    var _a, _b, _c, _d;
    return prev.size === next.size &&
        prev.columns === next.columns &&
        prev.dataSource === next.dataSource &&
        ((_a = prev.rowSelections) === null || _a === void 0 ? void 0 : _a.selectedRowKeys) === ((_b = next.rowSelections) === null || _b === void 0 ? void 0 : _b.selectedRowKeys) &&
        ((_c = prev.rowSelections) === null || _c === void 0 ? void 0 : _c.onselect) === ((_d = next.rowSelections) === null || _d === void 0 ? void 0 : _d.onselect);
});
