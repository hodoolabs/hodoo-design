'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { stringify } from 'flatted';
import { memo, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import Tbody from './components/Tbody';
import Thead from './components/Thead';
const RowTable = ({ size, columns, dataSource, minWidth }) => {
    const tableContainerRef = useRef(null);
    const tableRef = useRef(null);
    const [sortDatas, setSortDatas] = useState(dataSource);
    const [showShadow, setShowShadow] = useState(false);
    const handleSortDatas = (dataSource, sortDatas, sorter) => {
        const isSorted = stringify(dataSource) !== stringify(sortDatas);
        setSortDatas(isSorted
            ? dataSource
            : [...dataSource].sort((a, b) => {
                return sorter(a, b);
            }));
    };
    useEffect(() => {
        setSortDatas(dataSource);
    }, [dataSource]);
    useEffect(() => {
        if (tableContainerRef.current && tableRef.current) {
            if (tableContainerRef.current.offsetWidth < tableRef.current.offsetWidth) {
                setShowShadow(true);
            }
        }
    }, [tableContainerRef, tableRef]);
    return (_jsxs("div", { className: 'relative flex overflow-x-auto', ref: tableContainerRef, children: [_jsxs("table", { className: 'w-full', style: { minWidth: `${minWidth}px` }, ref: tableRef, children: [_jsx(Thead, { size: size, columns: columns, dataSource: dataSource, sortDatas: sortDatas, onSort: handleSortDatas }), _jsx(Tbody, { size: size, columns: columns, sortDatas: sortDatas })] }), showShadow && _jsx(Shadow, {})] }));
};
export default memo(RowTable, (prev, next) => prev.size === next.size &&
    prev.columns === next.columns &&
    prev.dataSource === next.dataSource &&
    prev.minWidth === next.minWidth);
const Shadow = styled.div `
	position: sticky;
	content: '';
	right: 0;
	top: 0;
	bottom: 0;
	box-shadow: 0 0 60px 30px #fff, 0 0 100px 60px rgba(255, 255, 255, 0);
`;
