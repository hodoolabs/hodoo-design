/// <reference types="react" />
import { ColumnType } from '../../../types/table';
interface TbodyProps {
    columns: ColumnType<any>;
    sortDatas: any[];
}
declare const _default: import("react").MemoExoticComponent<({ columns, sortDatas }: TbodyProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
