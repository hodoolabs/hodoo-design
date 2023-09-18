import { Key } from 'react';
import { ColumnDataType, ColumnType } from '../../types/table';
interface RowTableProps {
    size: 'lg' | 'sm';
    columns: ColumnType<ColumnDataType>[];
    dataSource: ColumnDataType[];
    rowSelections?: {
        selectedRowKeys: Key[];
        onselect: (keys: Key[]) => void;
    };
    width?: number;
}
declare const _default: import("react").MemoExoticComponent<({ size, columns, dataSource, rowSelections, width }: RowTableProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
