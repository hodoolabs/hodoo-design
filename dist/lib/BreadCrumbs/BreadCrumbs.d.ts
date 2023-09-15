/// <reference types="react" />
import { BreadCrumbsType } from '../../types/breadCrumbs';
interface BreadCrumbsProps {
    data: BreadCrumbsType;
    pathname: string;
    className?: string;
    onPush: (pathname: string) => void;
}
declare const _default: import("react").MemoExoticComponent<({ data, pathname, className, onPush }: BreadCrumbsProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
