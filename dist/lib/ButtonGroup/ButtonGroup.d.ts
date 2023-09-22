/// <reference types="react" />
import { ButtonGroupType } from '../../types/buttonGroup';
interface ButtonGroupProps {
    buttons: ButtonGroupType[];
    active?: string;
    className?: string;
    onActive: (id: string) => void;
}
declare const _default: import("react").MemoExoticComponent<({ buttons, active, className, onActive }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
