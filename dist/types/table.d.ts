import { ReactNode } from 'react';
type ColumnType<RecordType> = {
    title: ReactNode;
    dataIndex: keyof RecordType;
    width?: number;
    tooltip?: {
        color: 'dark' | 'white';
        title: string;
        isShowArrow: boolean;
        position: 'top' | 'left' | 'right' | 'bottom';
    };
    sorter?: (a: ColumnDataType, b: ColumnDataType) => number;
};
type ColumnDataType = {
    id: string | number;
    [key: string]: string | number | ReactNode;
};
export type { ColumnType, ColumnDataType };
