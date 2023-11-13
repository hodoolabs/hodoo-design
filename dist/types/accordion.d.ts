type AccordionType = {
    index: number;
    icon: string;
    activeIcon: string;
    menu: AccordionMenuType;
    subMenus?: AccordionMenuType[];
};
type AccordionMenuType = {
    path: string;
    label: string;
};
export type { AccordionMenuType, AccordionType };
