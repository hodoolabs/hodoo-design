import { ButtonGroupType } from '../../types/buttonGroup';
interface ButtonGroupProps {
    buttons: ButtonGroupType[];
    active: string;
    className?: string;
    onActive: (value: string) => void;
}
declare const ButtonGroup: ({ buttons, active, className, onActive }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export default ButtonGroup;
