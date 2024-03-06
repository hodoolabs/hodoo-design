interface CheckBoxProps {
    checked: boolean;
    color?: string;
    label?: string;
    helper?: string;
    disabled?: boolean;
    className?: string;
    onChange: (value: boolean) => void;
}
declare const CheckBox: ({ checked, color, label, helper, disabled, className, onChange }: CheckBoxProps) => import("react/jsx-runtime").JSX.Element;
export default CheckBox;
