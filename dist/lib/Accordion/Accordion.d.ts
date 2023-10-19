/// <reference types="react" />
import { AccordionType } from '../../types/accordion';
interface AccordionProps {
    list: AccordionType[];
    pathname: string;
    className?: string;
    onPush: (pathname: string) => void;
}
declare const _default: import("react").MemoExoticComponent<({ list, pathname, className, onPush }: AccordionProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
