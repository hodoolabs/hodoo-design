/// <reference types="react" />
type ColumnType<RecordType> = {
    id?: React.Key;
    title: React.ReactNode;
    dataIndex: keyof RecordType;
    icon?: string | JSX.Element;
    onClickIcon?: (data: DataType[]) => void;
};
type DataType = {
    id: React.Key;
    [key: string]: string | number;
};
export type { ColumnType, DataType };
