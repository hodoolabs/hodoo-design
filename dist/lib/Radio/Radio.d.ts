interface RadioProps {
    id: string;
    selected: string;
    label?: string;
    helper?: string;
    disabled?: boolean;
    className?: string;
    onChange: (value: string) => void;
}
declare const Radio: ({ id, selected, label, helper, disabled, className, onChange }: RadioProps) => import("react/jsx-runtime").JSX.Element;
export default Radio;
