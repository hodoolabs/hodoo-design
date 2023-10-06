'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { stringify } from 'flatted';
import { memo, useEffect, useState } from 'react';
import Tbody from './components/Tbody';
import Thead from './components/Thead';
const RowTable = ({ size, columns, dataSource, minWidth }) => {
    const [sortDatas, setSortDatas] = useState(dataSource);
    const handleSortDatas = (dataSource, sortDatas, sorter) => {
        const isSorted = stringify(dataSource) !== stringify(sortDatas);
        setSortDatas(isSorted
            ? dataSource
            : [...dataSource].sort((a, b) => {
                console.log(dataSource.length - 1);
                return sorter(a, b, dataSource.length - 1);
            }));
    };
    useEffect(() => {
        setSortDatas(dataSource);
    }, [dataSource]);
    return (_jsx("div", { className: 'overflow-x-auto', children: _jsxs("table", { className: 'w-full', style: { minWidth: `${minWidth}px` }, children: [_jsx(Thead, { size: size, columns: columns, dataSource: dataSource, sortDatas: sortDatas, onSort: handleSortDatas }), _jsx(Tbody, { size: size, columns: columns, sortDatas: sortDatas })] }) }));
};
export default memo(RowTable, (prev, next) => prev.size === next.size &&
    prev.columns === next.columns &&
    prev.dataSource === next.dataSource &&
    prev.minWidth === next.minWidth);
