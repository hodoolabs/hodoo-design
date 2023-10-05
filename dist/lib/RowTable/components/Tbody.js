import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../../utils/style';
import { TableBodyStyle } from '../style';
const Tbody = ({ size, columns, sortDatas }) => {
    return (_jsx("tbody", { children: sortDatas.map((record, index) => (_jsx("tr", { className: 'flex items-center font-medium border-b border-solid border-b-gray-200 hover:bg-blue-50 hover:border-blue-300', children: columns.map((column, index) => (_jsx("td", { className: cn(TableBodyStyle({ size })), style: { width: `${column.width}%` }, children: column.render ? column.render(record) : record[column.dataIndex] }, index))) }, index))) }));
};
export default memo(Tbody, (prev, next) => prev.size === next.size &&
    prev.columns === next.columns &&
    prev.checkedList === next.checkedList &&
    prev.sortDatas === next.sortDatas &&
    prev.onChecked === next.onChecked);
