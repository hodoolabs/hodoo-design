import { ColumnType } from '../../types/table';
interface RowTableProps {
    size: 'lg' | 'sm';
    columns: ColumnType<any>;
    dataSource: any[];
    minWidth?: number;
}
declare const _default: import("react").MemoExoticComponent<({ size, columns, dataSource, minWidth }: RowTableProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
