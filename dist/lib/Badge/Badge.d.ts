import { ReactNode } from 'react';

interface BadgeProps {
    color?: 'blue' | 'gray' | 'gray_low' | 'white' | 'red';
    size?: 'lg' | 'md' | 'sm';
    leftIcon?: ReactNode;
    label?: string;
    className?: string;
    onClick?: () => void;
}
declare const Badge: ({ color, size, leftIcon, label, className, onClick }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export default Badge;
