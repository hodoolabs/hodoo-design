import { ReactNode } from 'react';
import { DatepickerType } from 'react-tailwindcss-datepicker';
interface DatePickerProps extends DatepickerType {
    size?: 'lg' | 'sm';
    label?: ReactNode;
    error?: string;
    helper?: string;
    required?: boolean;
    className?: string;
    onError?: (error: string) => void;
}
declare const _default: import("react").MemoExoticComponent<({ size, label, error, helper, required, className, onError, onChange, ...props }: DatePickerProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
