import { Key } from 'react';
import { ColumnType, DataType } from '../../types/table';
interface RowTableProps {
    size: 'lg' | 'sm';
    columns: ColumnType<DataType>[];
    dataSource: DataType[];
    rowSelections?: {
        selectedRowKeys: Key[];
        onselect: (keys: Key[]) => void;
    };
}
declare const _default: import("react").MemoExoticComponent<({ size, columns, dataSource, rowSelections }: RowTableProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
