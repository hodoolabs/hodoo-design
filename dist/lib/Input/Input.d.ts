import { HTMLInputTypeAttribute } from 'react';
interface InputProps {
    type?: HTMLInputTypeAttribute;
    size: 'lg' | 'sm';
    label?: string | JSX.Element;
    value: string;
    error?: string;
    maxLength?: number;
    placeholder?: string;
    helper?: JSX.Element;
    disabled?: boolean;
    required?: boolean;
    onChange?: (value: string) => void;
    onError?: (error: string) => void;
    onEnter?: () => void;
}
declare const _default: import("react").MemoExoticComponent<({ type, size, label, value, error, maxLength, placeholder, helper, disabled, required, onChange, onError, onEnter, }: InputProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
