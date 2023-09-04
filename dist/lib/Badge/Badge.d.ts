/// <reference types="react" />
interface BadgeProps {
    color: 'blue' | 'gray' | 'gray_low' | 'red';
    size: 'lg' | 'sm';
    leftIcon?: string | JSX.Element;
    close?: boolean;
    label?: string;
    className?: string;
    onClick?: () => void;
}
declare const _default: import("react").MemoExoticComponent<({ color, size, leftIcon, close, label, className, onClick }: BadgeProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
