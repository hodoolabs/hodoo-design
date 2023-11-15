'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import Tbody from './components/Tbody';
import Thead from './components/Thead';
const RowTable = ({ columns, dataSource, className }) => {
    const wrapRef = useRef(null);
    const tableRef = useRef(null);
    const [sortDatas, setSortDatas] = useState(dataSource);
    const [sortStatus, setSortStatus] = useState('basic');
    const [shadow, setShadow] = useState(false);
    const handleClickSort = (dataIndex) => {
        if (sortStatus === 'basic') {
            setSortStatus('descend');
            setSortDatas([...dataSource].sort((b, a) => {
                if (typeof a[dataIndex] === 'number' && typeof b[dataIndex] === 'number') {
                    return a[dataIndex] - b[dataIndex];
                }
                else {
                    return String(a[dataIndex]).localeCompare(String(b[dataIndex]));
                }
            }));
        }
        if (sortStatus === 'descend') {
            setSortStatus('ascend');
            setSortDatas([...dataSource].sort((a, b) => {
                if (typeof a[dataIndex] === 'number' && typeof b[dataIndex] === 'number') {
                    return a[dataIndex] - b[dataIndex];
                }
                else {
                    return String(a[dataIndex]).localeCompare(String(b[dataIndex]));
                }
            }));
        }
        if (sortStatus === 'ascend') {
            setSortStatus('basic');
            setSortDatas(dataSource);
        }
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
    return (_jsx("div", { className: className, children: _jsxs("div", { id: 'table', className: 'relative flex overflow-x-auto', ref: wrapRef, children: [_jsxs("table", { className: 'w-full', ref: tableRef, children: [_jsx(Thead, { columns: columns, onSort: handleClickSort }), _jsx(Tbody, { columns: columns, sortDatas: sortDatas })] }), shadow && (_jsx("div", { className: 'sticky top-0 right-0', style: { boxShadow: '0 0 60px 30px #fff,0 0 100px 60px rgba(255, 255, 255, 0.5)' } }))] }) }));
};
export default RowTable;
