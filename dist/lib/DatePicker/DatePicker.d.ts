/// <reference types="react" />
import { DateValueType, DatepickerType } from 'react-tailwindcss-datepicker';
interface DatePickerProps extends DatepickerType {
    size: 'lg' | 'sm';
    label?: string | JSX.Element;
    value: DateValueType;
    error?: string;
    helper?: string;
    required?: boolean;
    isClose?: boolean;
    className?: string;
    onChange: (value: DateValueType) => void;
    onError?: (error: string) => void;
}
declare const _default: import("react").MemoExoticComponent<({ size, label, value, error, helper, required, isClose, className, onChange, onError, ...props }: DatePickerProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
