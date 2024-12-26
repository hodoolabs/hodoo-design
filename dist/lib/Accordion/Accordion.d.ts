import { AccordionType } from '../../types/accordion';
interface AccordionProps {
    list: AccordionType[];
    path: string;
    className?: string;
    menuItem?: {
        bgColor?: string;
        textColor?: string;
        hoverColor?: string;
    };
    onPush: (path: string) => void;
}
declare const Accordion: ({ list, path, className, menuItem, onPush }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export default Accordion;
