/// <reference types="react" />
interface SelectItem {
    value: string;
    label: string;
}
interface SelectProps {
    size?: 'sm' | 'md' | 'lg';
    items: SelectItem[];
    selected: string;
    center?: boolean;
    label?: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    onClick?: () => void;
    onChange: (value: string) => void;
}
declare const _default: import("react").MemoExoticComponent<({ size, items, selected, center, label, placeholder, required, className, onClick, onChange, }: SelectProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
