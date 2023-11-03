/// <reference types="react" />
import { ColumnType } from '../../types/table';
interface RowTableProps {
    columns: ColumnType<any>;
    dataSource: any[];
    minWidth?: number;
}
declare const _default: import("react").MemoExoticComponent<({ columns, dataSource, minWidth }: RowTableProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
