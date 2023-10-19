/// <reference types="react" />
import { BreadCrumbsType } from '../../types/breadCrumbs';
interface BreadCrumbsProps {
    data: BreadCrumbsType;
    path: string;
    className?: string;
    onPush: (path: string) => void;
}
declare const _default: import("react").MemoExoticComponent<({ data, path, className, onPush }: BreadCrumbsProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
