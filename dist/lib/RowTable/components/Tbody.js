'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../../utils/style';
import CheckBox from '../../CheckBox/CheckBox';
import { TableBodyStyle } from '../style';
const Tbody = ({ columns, checkBox, sortDatas }) => {
    const id = checkBox === null || checkBox === void 0 ? void 0 : checkBox.id;
    const selected = checkBox === null || checkBox === void 0 ? void 0 : checkBox.selected;
    const onSelect = (seleted) => {
        checkBox === null || checkBox === void 0 ? void 0 : checkBox.onSelect(seleted);
    };
    return (_jsx("tbody", { children: sortDatas === null || sortDatas === void 0 ? void 0 : sortDatas.map((record, index) => (_jsxs("tr", { className: 'flex items-center font-medium border-b border-solid border-b-gray-200 hover:bg-gray-50', children: [checkBox && (_jsx("td", { className: 'py-4 leading-none', children: _jsx(CheckBox, { checked: selected.map((item) => item[id]).includes(record[id]), onChange: () => {
                            const select = selected.map((item) => item[id]).includes(record[id])
                                ? selected.filter((item) => item[id] !== record[id])
                                : [...selected, record];
                            onSelect(select);
                        } }) })), columns.map((column, index) => (_jsx("td", { className: cn(TableBodyStyle({ click: !!column.onClick })), style: { width: `${column.width}%`, minWidth: column.minWidth }, onClick: () => column.onClick && column.onClick(record), children: column.render ? column.render(record) : record[column.dataIndex] }, index)))] }, index))) }));
};
export default Tbody;
