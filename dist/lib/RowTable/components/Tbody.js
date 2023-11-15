'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../../utils/style';
import { TableBodyStyle } from '../style';
const Tbody = ({ columns, sortDatas }) => {
    return (_jsx("tbody", { children: sortDatas === null || sortDatas === void 0 ? void 0 : sortDatas.map((record, index) => (_jsx("tr", { className: 'flex items-center font-medium border-b border-solid border-b-gray-200 hover:bg-gray-50', children: columns.map((column, index) => (_jsx("td", { className: cn(TableBodyStyle({ click: !!column.onClick })), style: { width: `${column.width}%`, minWidth: column.minWidth }, onClick: () => column.onClick && column.onClick(record), children: column.render ? column.render(record) : record[column.dataIndex] }, index))) }, index))) }));
};
export default Tbody;
