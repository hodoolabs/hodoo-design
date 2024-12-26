interface FileInputProps {
    size: 'lg' | 'sm';
    label?: string | JSX.Element;
    value: string;
    error?: string;
    buttonName: string;
    placeholder?: string;
    helper?: string | JSX.Element;
    required?: boolean;
    onChange: (files: FileList) => void;
}
declare const _default: import("react").MemoExoticComponent<({ size, label, value, error, buttonName, placeholder, helper, required, onChange, }: FileInputProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
