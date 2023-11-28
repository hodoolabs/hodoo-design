import { ColumnType, TableCheckBoxType } from '../../../types/table';
interface TbodyProps {
    columns: ColumnType<any>;
    checkBox?: TableCheckBoxType;
    sortDatas: any[];
}
declare const Tbody: ({ columns, checkBox, sortDatas }: TbodyProps) => import("react/jsx-runtime").JSX.Element;
export default Tbody;
