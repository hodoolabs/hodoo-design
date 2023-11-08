import { ColumnDataType, ColumnType } from '../../../types/table';
interface TheadProps {
    columns: ColumnType<any>;
    dataSource: any[];
    sortDatas: any[];
    onSort: (dataSource: ColumnDataType[], sortDatas: ColumnDataType[], sorter: (a: ColumnDataType, b: ColumnDataType) => number) => void;
}
declare const Thead: ({ columns, dataSource, sortDatas, onSort }: TheadProps) => import("react/jsx-runtime").JSX.Element;
export default Thead;
