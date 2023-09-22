import { Key } from 'react';
import { ColumnDataType, ColumnType } from '../../../types/table';
interface TheadProps {
    size: 'lg' | 'sm';
    columns: ColumnType<any>;
    dataSource: any[];
    checkedList?: Key[];
    sortDatas: any[];
    onChecked?: (keys: Key[]) => void;
    onSort: (dataSource: ColumnDataType[], sortDatas: ColumnDataType[], sorter: (a: ColumnDataType, b: ColumnDataType) => number) => void;
}
declare const _default: import("react").MemoExoticComponent<({ size, columns, dataSource, checkedList, sortDatas, onChecked, onSort }: TheadProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
