import { ColumnType } from '../../../types/table';
interface TbodyProps {
    columns: ColumnType<any>;
    sortDatas: any[];
}
declare const Tbody: ({ columns, sortDatas }: TbodyProps) => import("react/jsx-runtime").JSX.Element;
export default Tbody;
