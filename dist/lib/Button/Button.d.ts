import { ReactNode } from 'react';

interface ButtonProps {
    color?: 'black' | 'blue' | 'white' | 'gray' | 'red' | 'white_line';
    size?: 'lg' | 'md' | 'base' | 'sm';
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    label?: string;
    disabled?: boolean;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const Button: ({ color, size, leftIcon, rightIcon, label, disabled, className, onClick, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
