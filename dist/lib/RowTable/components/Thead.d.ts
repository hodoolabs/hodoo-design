import { ColumnType, TableCheckBoxType } from '../../../types/table';

interface TheadProps {
    columns: ColumnType<any>;
    checkBox?: TableCheckBoxType;
    sortDatas: any[];
    onSort: (dataIndex: any) => void;
}
declare const Thead: ({ columns, checkBox, sortDatas, onSort }: TheadProps) => import("react/jsx-runtime").JSX.Element;
export default Thead;
