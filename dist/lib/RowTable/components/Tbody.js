import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../../utils/style';
import { TableBodyStyle } from '../style';
const Tbody = ({ size, columns, sortDatas }) => {
    return (_jsx("tbody", { children: sortDatas === null || sortDatas === void 0 ? void 0 : sortDatas.map((record, index) => (_jsx("tr", { className: 'flex items-center font-medium border-b border-solid border-b-gray-200 hover:bg-gray-50', children: columns.map((column, index) => (_jsx("td", { className: cn(TableBodyStyle({ size, click: !!column.onClick })), style: { width: `${column.width}%` }, onClick: () => column.onClick && column.onClick(record), children: column.render ? column.render(record) : record[column.dataIndex] }, index))) }, index))) }));
};
export default memo(Tbody, (prev, next) => prev.size === next.size &&
    prev.columns === next.columns &&
    prev.checkedList === next.checkedList &&
    prev.sortDatas === next.sortDatas);
