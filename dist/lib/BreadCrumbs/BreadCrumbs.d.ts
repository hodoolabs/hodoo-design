import { BreadCrumbsType } from '../../types/breadCrumbs';
interface BreadCrumbsProps {
    data: BreadCrumbsType;
    path: string;
    className?: string;
    onPush: (path: string) => void;
}
declare const BreadCrumbs: ({ data, path, className, onPush }: BreadCrumbsProps) => import("react/jsx-runtime").JSX.Element;
export default BreadCrumbs;
