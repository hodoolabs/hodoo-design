import { ReactNode } from 'react';
interface ToggleProps {
    size?: 'sm' | 'md' | 'lg';
    activated: boolean;
    label?: ReactNode;
    helper?: string;
    disabled?: boolean;
    className?: string;
    onChange: (value: boolean) => void;
}
declare const Toggle: ({ size, activated, label, helper, disabled, className, onChange }: ToggleProps) => import("react/jsx-runtime").JSX.Element;
export default Toggle;
