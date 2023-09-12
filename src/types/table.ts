type ColumnType<RecordType> = {
	title: string;
	dataIndex: keyof RecordType;
	width?: number;
	sorter?: (a: ColumnDataType, b: ColumnDataType) => number;
};

type ColumnDataType = {
	[key: string]: string | number;
};

export type { ColumnType, ColumnDataType };
