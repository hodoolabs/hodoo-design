import { ReactNode } from 'react';
import { DatepickerType } from 'react-tailwindcss-datepicker';
interface DatePickerProps extends DatepickerType {
    size?: 'lg' | 'sm';
    label?: ReactNode;
    error?: string;
    helper?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    onError?: (error: string) => void;
}
declare const DatePicker: ({ size, label, error, helper, required, disabled, className, onError, onChange, ...props }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export default DatePicker;
