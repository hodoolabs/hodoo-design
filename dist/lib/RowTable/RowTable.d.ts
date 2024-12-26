import { ColumnType, TableCheckBoxType } from '../../types/table';

interface RowTableProps {
    columns: ColumnType<any>;
    dataSource: any[];
    checkBox?: TableCheckBoxType;
    className?: string;
}
declare const RowTable: ({ columns, dataSource, checkBox, className }: RowTableProps) => import("react/jsx-runtime").JSX.Element;
export default RowTable;
