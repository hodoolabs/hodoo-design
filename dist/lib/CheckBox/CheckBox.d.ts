/// <reference types="react" />
interface CheckBoxProps {
    checked: boolean;
    label?: string;
    helper?: string;
    disabled?: boolean;
    onChange: (value: boolean) => void;
}
declare const _default: import("react").MemoExoticComponent<({ checked, label, helper, disabled, onChange }: CheckBoxProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
