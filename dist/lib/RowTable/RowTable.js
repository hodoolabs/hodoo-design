'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import Tbody from './components/Tbody';
import Thead from './components/Thead';
const RowTable = ({ columns, dataSource, checkBox, className }) => {
    const wrapRef = useRef(null);
    const tableRef = useRef(null);
    const [sortDatas, setSortDatas] = useState(dataSource);
    const [sortStatus, setSortStatus] = useState('basic');
    const [shadow, setShadow] = useState(false);
    const getSortDatas = (a, b, dataIndex) => {
        if (typeof a[dataIndex] === 'number' && typeof b[dataIndex] === 'number') {
            return a[dataIndex] - b[dataIndex];
        }
        else {
            return String(a[dataIndex]).localeCompare(String(b[dataIndex]));
        }
    };
    const handleClickSort = (dataIndex) => {
        if (sortStatus === 'basic') {
            setSortStatus('descend');
            setSortDatas([...dataSource].sort((b, a) => getSortDatas(a, b, dataIndex)));
        }
        if (sortStatus === 'descend') {
            setSortStatus('ascend');
            setSortDatas([...dataSource].sort((a, b) => getSortDatas(a, b, dataIndex)));
        }
        if (sortStatus === 'ascend') {
            setSortStatus('basic');
            setSortDatas(dataSource);
        }
    };
    const handleSetShadow = () => {
        if (!wrapRef.current || !tableRef.current)
            return;
        const isEndScroll = wrapRef.current.offsetWidth + wrapRef.current.scrollLeft === wrapRef.current.scrollWidth;
        const isScroll = wrapRef.current.offsetWidth < tableRef.current.offsetWidth;
        setShadow(isScroll && !isEndScroll);
    };
    useEffect(() => {
        setSortDatas(dataSource);
    }, [dataSource]);
    useEffect(() => {
        if (!wrapRef.current || !tableRef.current)
            return;
        handleSetShadow();
        global.window.addEventListener('resize', handleSetShadow);
        wrapRef.current.addEventListener('scroll', handleSetShadow);
        return () => {
            var _a;
            global.window.removeEventListener('resize', handleSetShadow);
            (_a = wrapRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('scroll', handleSetShadow);
        };
    }, [wrapRef, tableRef]);
    return (_jsxs("div", { className: `relative ${className}`, children: [_jsx("div", { id: 'table', className: 'relative flex overflow-x-auto', ref: wrapRef, children: _jsxs("table", { className: 'w-full', ref: tableRef, children: [_jsx(Thead, { columns: columns, checkBox: checkBox, sortDatas: sortDatas, onSort: handleClickSort }), _jsx(Tbody, { columns: columns, checkBox: checkBox, sortDatas: sortDatas })] }) }), _jsx("div", { className: `absolute top-0 right-0 w-[100px] h-full bg-gradient-to-l from-white pointer-events-none duration-300 ${!shadow ? 'opacity-0' : 'opacity-100'}` })] }));
};
export default RowTable;
