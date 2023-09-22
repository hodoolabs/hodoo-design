/// <reference types="react" />
interface ButtonProps {
    color: 'black' | 'blue' | 'white' | 'gray' | 'red' | 'white_line';
    size: 'lg' | 'md' | 'base' | 'sm';
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    label?: string;
    disabled?: boolean;
    isFull?: boolean;
    className?: string;
    onClick: () => void;
}
declare const _default: import("react").MemoExoticComponent<({ color, size, leftIcon, rightIcon, label, disabled, isFull, className, onClick, }: ButtonProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
