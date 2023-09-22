import { Key } from 'react';
import { ColumnType } from '../../../types/table';
interface TbodyProps {
    size: 'lg' | 'sm';
    columns: ColumnType<any>;
    checkedList?: Key[];
    sortDatas: any[];
    onChecked?: (keys: Key[]) => void;
}
declare const Tbody: ({ size, columns, checkedList, sortDatas, onChecked }: TbodyProps) => import("react/jsx-runtime").JSX.Element;
export default Tbody;
