import { ColumnType } from '../../types/table';
interface RowTableProps {
    columns: ColumnType<any>;
    dataSource: any[];
    className?: string;
}
declare const RowTable: ({ columns, dataSource, className }: RowTableProps) => import("react/jsx-runtime").JSX.Element;
export default RowTable;
