interface BadgeProps {
    color: 'blue' | 'gray' | 'gray_low' | 'red';
    size: 'lg' | 'md' | 'sm';
    leftIcon?: string | JSX.Element;
    label?: string;
    className?: string;
    onClick?: () => void;
}
declare const _default: import("react").MemoExoticComponent<({ color, size, leftIcon, label, className, onClick }: BadgeProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
