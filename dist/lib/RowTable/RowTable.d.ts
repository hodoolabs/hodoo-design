import { Key } from 'react';
import { ColumnType, ColumnDataType } from '../../types/table';
interface RowTableProps {
    size: 'lg' | 'sm';
    columns: ColumnType<ColumnDataType>[];
    dataSource: ColumnDataType[];
    rowSelections?: {
        selectedRowKeys: Key[];
        onselect: (keys: Key[]) => void;
    };
}
declare const _default: import("react").MemoExoticComponent<({ size, columns, dataSource, rowSelections }: RowTableProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
