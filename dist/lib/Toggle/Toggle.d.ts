/// <reference types="react" />
interface ToggleProps {
    size: 'sm' | 'md' | 'lg';
    activated: boolean;
    label?: string;
    helper?: string;
    disabled?: boolean;
    onChange: (value: boolean) => void;
}
declare const _default: import("react").MemoExoticComponent<({ size, activated, label, helper, disabled, onChange }: ToggleProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
