import { ReactNode } from 'react';
interface LabelProps {
    size?: any;
    value?: string;
    error?: string;
    label?: ReactNode;
    maxLength?: number;
    disabled?: boolean;
    required?: boolean;
}
declare const Label: ({ size, value, error, label, maxLength, disabled, required }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default Label;
