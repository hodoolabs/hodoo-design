import { ColumnType } from '../../types/table';
interface RowTableProps {
    columns: ColumnType<any>;
    dataSource: any[];
    minWidth?: number;
}
declare const RowTable: ({ columns, dataSource, minWidth }: RowTableProps) => import("react/jsx-runtime").JSX.Element;
export default RowTable;
