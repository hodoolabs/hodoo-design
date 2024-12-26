import { ReactNode } from 'react';
import { SelectType } from '../../types/select';

interface SelectProps {
    size?: 'sm' | 'md' | 'lg';
    items?: SelectType[];
    selected?: string;
    error?: string;
    center?: boolean;
    label?: string;
    placeholder?: string;
    helper?: ReactNode;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    onClick?: () => void;
    onChange?: (value: string) => void;
    onError?: (error: string) => void;
}
declare const Select: ({ size, items, selected, error, center, label, placeholder, helper, disabled, required, className, onClick, onChange, onError, }: SelectProps) => import("react/jsx-runtime").JSX.Element;
export default Select;
