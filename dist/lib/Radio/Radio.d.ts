/// <reference types="react" />
interface RadioProps {
    id: string | number;
    selected: string | number;
    label?: string;
    helper?: string;
    disabled?: boolean;
    onChange?: (value: string | number) => void;
}
declare const _default: import("react").MemoExoticComponent<({ id, selected, label, helper, disabled, onChange }: RadioProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
