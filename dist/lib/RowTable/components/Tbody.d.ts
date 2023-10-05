import { Key } from 'react';
import { ColumnType } from '../../../types/table';
interface TbodyProps {
    size: 'lg' | 'sm';
    columns: ColumnType<any>;
    checkedList?: Key[];
    sortDatas: any[];
    onChecked?: (keys: Key[]) => void;
}
declare const _default: import("react").MemoExoticComponent<({ size, columns, checkedList, sortDatas, onChecked }: TbodyProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
