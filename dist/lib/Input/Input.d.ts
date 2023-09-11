import { HTMLInputTypeAttribute } from 'react';
interface InputProps {
    type?: HTMLInputTypeAttribute;
    size: 'lg' | 'sm';
    label?: string | JSX.Element;
    value: string;
    error?: string;
    maxLength?: number;
    placeholder?: string;
    helper?: string | JSX.Element;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    onBlur?: (value: string) => void;
    onChange?: (value: string) => void;
    onError?: (error: string) => void;
    onEnter?: () => void;
}
declare const _default: import("react").MemoExoticComponent<({ type, size, label, value, error, maxLength, placeholder, helper, disabled, required, className, onBlur, onChange, onError, onEnter, }: InputProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
