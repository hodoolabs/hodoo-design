import { Dispatch, SetStateAction } from 'react';
interface DropdownProps {
    element: Element | DocumentFragment;
    top: number;
    left: number;
    list: string[];
    onClick: (name: string) => void;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
declare const _default: import("react").MemoExoticComponent<({ element, top, left, list, onClick, setOpen }: DropdownProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
