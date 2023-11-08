'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { stringify } from 'flatted';
import { useEffect, useRef, useState } from 'react';
import Tbody from './components/Tbody';
import Thead from './components/Thead';
const RowTable = ({ columns, dataSource, minWidth }) => {
    const wrapRef = useRef(null);
    const tableRef = useRef(null);
    const [sortDatas, setSortDatas] = useState(dataSource);
    const [shadow, setShadow] = useState(false);
    const handleSortDatas = (dataSource, sortDatas, sorter) => {
        const isSorted = stringify(dataSource) !== stringify(sortDatas);
        setSortDatas(isSorted ? dataSource : [...dataSource].sort((a, b) => sorter(a, b)));
    };
    const handleSetShadow = () => {
        if (!wrapRef.current || !tableRef.current)
            return;
        setShadow(wrapRef.current.offsetWidth < tableRef.current.offsetWidth);
    };
    useEffect(() => {
        setSortDatas(dataSource);
    }, [dataSource]);
    useEffect(() => {
        if (!wrapRef.current || !tableRef.current)
            return;
        handleSetShadow();
        global.window.addEventListener('resize', handleSetShadow);
        return () => {
            global.window.removeEventListener('resize', handleSetShadow);
        };
    }, [wrapRef, tableRef]);
    return (_jsxs("div", { className: 'relative flex overflow-x-auto', ref: wrapRef, children: [_jsxs("table", { className: 'w-full', style: { minWidth }, ref: tableRef, children: [_jsx(Thead, { columns: columns, dataSource: dataSource, sortDatas: sortDatas, onSort: handleSortDatas }), _jsx(Tbody, { columns: columns, sortDatas: sortDatas })] }), shadow && (_jsx("div", { className: 'sticky top-0 right-0', style: { boxShadow: '0 0 60px 30px #fff,0 0 100px 60px rgba(255, 255, 255, 0.5)' } }))] }));
};
export default RowTable;
