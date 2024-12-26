import { ReactNode } from 'react';

interface TextAreaProps {
    size?: 'lg' | 'sm';
    value: string;
    error?: string;
    label?: ReactNode;
    maxLength?: number;
    placeholder?: string;
    helper?: ReactNode;
    disabled?: boolean;
    height?: number;
    required?: boolean;
    className?: string;
    inputClassName?: string;
    onChange?: (value: string) => void;
    onError?: (error: string) => void;
}
declare const TextArea: ({ size, label, value, error, maxLength, placeholder, helper, disabled, height, required, className, inputClassName, onChange, onError, }: TextAreaProps) => import("react/jsx-runtime").JSX.Element;
export default TextArea;
