type ColumnType<RecordType> = {
    title: string;
    dataIndex: keyof RecordType;
    width?: number;
    sorter?: (a: DataType, b: DataType) => number;
};
type DataType = {
    [key: string]: string | number;
};
export type { ColumnType, DataType };
