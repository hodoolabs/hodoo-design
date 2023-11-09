import { ColumnType } from '../../types/table';
interface RowTableProps {
    columns: ColumnType<any>;
    dataSource: any[];
    minWidth?: number;
    className?: string;
}
declare const RowTable: ({ columns, dataSource, minWidth, className }: RowTableProps) => import("react/jsx-runtime").JSX.Element;
export default RowTable;
