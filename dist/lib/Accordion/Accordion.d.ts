import { AccordionType } from '../../types/accordion';
interface AccordionProps {
    list: AccordionType[];
    path: string;
    className?: string;
    onPush: (path: string) => void;
}
declare const Accordion: ({ list, path, className, onPush }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export default Accordion;
