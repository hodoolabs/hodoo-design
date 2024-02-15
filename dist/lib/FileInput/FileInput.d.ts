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
    multiple?: boolean;
    disabled?: boolean;
    className?: string;
    onChange: (files: FileList) => void;
}
declare const FileInput: ({ size, value, buttonName, label, error, placeholder, helper, required, multiple, disabled, className, onChange, }: FileInputProps) => import("react/jsx-runtime").JSX.Element;
export default FileInput;
