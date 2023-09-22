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
	sorter?: (a: RecordType, b: RecordType) => number;
	render?: (values: RecordType) => ReactNode;
}[];

type ColumnDataType = {
	id: string | number;
	[key: string]: ReactNode;
};

export type { ColumnType, ColumnDataType };
