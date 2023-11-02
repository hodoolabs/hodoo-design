import { Key } from 'react';
import { ColumnType } from '../../../types/table';
interface TbodyProps {
    size: 'lg' | 'sm';
    columns: ColumnType<any>;
    checkedList?: Key[];
    sortDatas: any[];
}
declare const _default: import("react").MemoExoticComponent<({ size, columns, sortDatas }: TbodyProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
