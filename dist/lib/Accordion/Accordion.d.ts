/// <reference types="react" />
import { AccordionType } from '../../types/accordion';
interface AccordionProps {
    list: AccordionType[];
    path: string;
    className?: string;
    onPush: (pathname: string) => void;
}
declare const _default: import("react").MemoExoticComponent<({ list, path, className, onPush }: AccordionProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
