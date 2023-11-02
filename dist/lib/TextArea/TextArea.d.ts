/// <reference types="react" />
interface TextAreaProps {
    size: 'lg' | 'sm';
    label?: string | JSX.Element;
    value: string;
    error?: string;
    maxLength?: number;
    placeholder?: string;
    helper?: string | JSX.Element;
    disabled?: boolean;
    height?: number;
    required?: boolean;
    className?: string;
    onChange?: (value: string) => void;
    onError?: (error: string) => void;
}
declare const _default: import("react").MemoExoticComponent<({ size, label, value, error, maxLength, placeholder, helper, disabled, height, required, className, onChange, onError, }: TextAreaProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
