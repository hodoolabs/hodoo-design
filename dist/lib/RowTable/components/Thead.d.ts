import { ColumnDataType, ColumnType } from '../../../types/table';
interface TheadProps {
    size: 'lg' | 'sm';
    columns: ColumnType<any>;
    dataSource: any[];
    sortDatas: any[];
    onSort: (dataSource: ColumnDataType[], sortDatas: ColumnDataType[], sorter: (a: ColumnDataType, b: ColumnDataType) => number) => void;
}
declare const _default: import("react").MemoExoticComponent<({ size, columns, dataSource, sortDatas, onSort }: TheadProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
