import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../../utils/style';
import { TableBodyStyle } from '../style';
import CheckBox from '../../CheckBox/CheckBox';
const Tbody = ({ size, columns, checkedList, sortDatas, onChecked }) => {
    return (_jsx("tbody", { children: sortDatas.map((record, index) => (_jsxs("tr", { className: 'flex items-center font-medium border-b border-solid border-b-gray-200 hover:bg-blue-50 hover:border-blue-300', children: [checkedList && (_jsx("td", { className: 'p-4 leading-none', children: _jsx(CheckBox, { checked: checkedList.includes(record.id), onChange: () => {
                            const newSelectedKeys = checkedList.includes(record.id)
                                ? checkedList.filter((key) => key !== record.id)
                                : [...checkedList, record.id];
                            onChecked && onChecked(newSelectedKeys);
                        } }) })), columns.map((column, index) => (_jsx("td", { className: cn(TableBodyStyle({ size })), style: { width: column.width ? `${column.width}%` : 'auto' }, children: column.render ? column.render(record) : record[column.dataIndex] }, index)))] }, index))) }));
};
export default Tbody;
