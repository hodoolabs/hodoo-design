/// <reference types="react" />
import { BreadCrumbsType } from '../../types/breadCrumbs';
interface BreadCrumbsProps {
    data: BreadCrumbsType;
    onPush: (pathname: string) => void;
    pathname: string;
}
declare const _default: import("react").MemoExoticComponent<({ data, pathname, onPush }: BreadCrumbsProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
