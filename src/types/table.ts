import { ReactNode } from 'react';
import { TooltipType } from './tooltip';

type ColumnType<RecordType> = {
	title: ReactNode;
	dataIndex: keyof RecordType;
	width?: number;
	minWidth?: number;
	tooltip?: TooltipType;
	sorter?: boolean;
	render?: (values: RecordType) => ReactNode;
	onClick?: (values: RecordType) => void;
}[];

type ColumnDataType = {
	id: string | number;
	[key: string]: ReactNode;
};

type TableCheckBoxType = {
	id: string;
	selected: ReactNode[];
	onSelect: (keys: ReactNode[]) => void;
};

export type { ColumnDataType, ColumnType, TableCheckBoxType };
