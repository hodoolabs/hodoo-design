import { ReactNode } from 'react';
import { TooltipType } from './tooltip';
type ColumnType<RecordType> = {
    title: ReactNode;
    dataIndex: keyof RecordType;
    width?: number;
    fixWidth?: number;
    tooltip?: TooltipType;
    sorter?: (a: RecordType, b: RecordType) => number;
    render?: (values: RecordType) => ReactNode;
    onClick?: (values: RecordType) => void;
}[];
type ColumnDataType = {
    id: string | number;
    [key: string]: ReactNode;
};
export type { ColumnDataType, ColumnType };
