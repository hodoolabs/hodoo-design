import { ReactNode } from 'react';

import { ButtonGroupType } from '../../types/buttonGroup';
interface ButtonGroupProps {
    type?: 'primary' | 'secondary';
    active: string;
    error?: string;
    buttons: ButtonGroupType[];
    label?: ReactNode;
    helper?: ReactNode;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    onActive: (active: string) => void;
    onError?: (error: string) => void;
}
declare const ButtonGroup: ({ type, active, error, buttons, label, helper, disabled, required, className, onActive, onError, }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export default ButtonGroup;
