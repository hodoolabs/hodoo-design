import { ReactNode } from 'react';
import { TooltipType } from './tooltip';

type ColumnType<RecordType> = {
	title: ReactNode;
	dataIndex: keyof RecordType;
	width?: number;
	tooltip?: TooltipType;
	sorter?: (a: RecordType, b: RecordType) => number;
	render?: (values: RecordType) => ReactNode;
}[];

type ColumnDataType = {
	id: string | number;
	[key: string]: ReactNode;
};

export type { ColumnType, ColumnDataType };
