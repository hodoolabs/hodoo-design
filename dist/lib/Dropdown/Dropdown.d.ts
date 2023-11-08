import { ReactNode } from 'react';
import { DropdownType } from '../../types/dropdown';
interface DropdownProps {
    isOpen: boolean;
    list: DropdownType[];
    width: number;
    height: number;
    position?: 'left' | 'right';
    className?: string;
    children: ReactNode;
    onSelect: (name: string) => void;
    onOpen: (value: boolean) => void;
}
declare const Dropdown: ({ isOpen, list, width, height, position, className, children, onSelect, onOpen, }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
