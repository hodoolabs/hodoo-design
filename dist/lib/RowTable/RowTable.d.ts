import { Key } from 'react';
import { ColumnType } from '../../types/table';
interface RowTableProps {
    size: 'lg' | 'sm';
    columns: ColumnType<any>;
    dataSource: any[];
    checkedList?: Key[];
    minWidth?: number;
    onChecked?: (keys: Key[]) => void;
}
declare const _default: import("react").MemoExoticComponent<({ size, columns, dataSource, checkedList, minWidth, onChecked }: RowTableProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
