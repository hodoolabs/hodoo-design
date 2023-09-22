'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { stringify } from 'flatted';
import { memo, useState } from 'react';
import Tbody from './components/Tbody';
import Thead from './components/Thead';
const RowTable = ({ size, columns, dataSource, checkedList, minWidth, onChecked }) => {
    const [sortDatas, setSortDatas] = useState(dataSource);
    const handleSortDatas = (dataSource, sortDatas, sorter) => {
        const isSorted = stringify(dataSource) !== stringify(sortDatas);
        setSortDatas(isSorted ? dataSource : [...dataSource].sort(sorter));
    };
    return (_jsx("div", { className: 'overflow-x-auto', children: _jsxs("table", { className: 'w-full', style: { minWidth: `${minWidth}px` }, children: [_jsx(Thead, { size: size, columns: columns, dataSource: dataSource, checkedList: checkedList, sortDatas: sortDatas, onChecked: onChecked, onSort: handleSortDatas }), _jsx(Tbody, { size: size, columns: columns, checkedList: checkedList, sortDatas: sortDatas, onChecked: onChecked })] }) }));
};
export default memo(RowTable, (prev, next) => prev.size === next.size &&
    prev.columns === next.columns &&
    prev.dataSource === next.dataSource &&
    prev.checkedList === next.checkedList &&
    prev.minWidth === next.minWidth &&
    prev.onChecked === next.onChecked);
