/// <reference types="react" />
import { ButtonGroupType } from '../../types/buttonGroup';
interface ButtonGroupProps {
    buttons: ButtonGroupType[];
    defaultActive?: number;
    className?: string;
}
declare const _default: import("react").MemoExoticComponent<({ buttons, defaultActive, className }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
