import { HTMLInputTypeAttribute, ReactNode } from 'react';
interface InputProps {
    type?: HTMLInputTypeAttribute;
    size?: 'lg' | 'sm';
    value: string;
    error?: string;
    label?: ReactNode;
    maxLength?: number;
    placeholder?: string;
    helper?: ReactNode;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    autoComplete?: JSX.IntrinsicElements['input']['autoComplete'];
    onBlur?: (value: string) => void;
    onChange?: (value: string) => void;
    onError?: (error: string) => void;
    onEnter?: () => void;
}
declare const Input: ({ type, size, autoComplete, label, value, error, maxLength, placeholder, helper, disabled, required, className, onBlur, onChange, onError, onEnter, }: InputProps) => import("react/jsx-runtime").JSX.Element;
export default Input;
