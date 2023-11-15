import { ColumnType } from '../../../types/table';
interface TheadProps {
    columns: ColumnType<any>;
    onSort: (dataIndex: any) => void;
}
declare const Thead: ({ columns, onSort }: TheadProps) => import("react/jsx-runtime").JSX.Element;
export default Thead;
