import { ReactNode } from 'react';
interface FileInputProps {
    size?: 'lg' | 'sm';
    value: string;
    buttonName: string;
    label?: ReactNode;
    error?: string;
    placeholder?: string;
    helper?: ReactNode;
    required?: boolean;
    className?: string;
    onChange: (files: FileList) => void;
}
declare const _default: import("react").MemoExoticComponent<({ size, value, buttonName, label, error, placeholder, helper, required, className, onChange, }: FileInputProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
