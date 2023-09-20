/// <reference types="react" />
import { DateValueType, DatepickerType } from 'react-tailwindcss-datepicker';
interface DatePickerProps extends DatepickerType {
    size: 'lg' | 'sm';
    label?: string | JSX.Element;
    value: DateValueType;
    error?: string;
    format?: string;
    helper?: string;
    required?: boolean;
    className?: string;
    onChange: (value: DateValueType) => void;
    onError?: (error: string) => void;
}
declare const _default: import("react").MemoExoticComponent<({ size, label, value, error, format, helper, required, className, onChange, onError, ...props }: DatePickerProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
