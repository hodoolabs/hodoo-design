/// <reference types="react" />
import { DateValueType, DatepickerType } from 'react-tailwindcss-datepicker';
interface DatePickerProps extends DatepickerType {
    size: 'lg' | 'sm';
    label?: string | JSX.Element;
    /**
     * 이 값이 true일 경우 Calendar가 하나만 노출됩니다. (default= 2개)
     * @see https://react-tailwindcss-datepicker.vercel.app/props
     */
    isSingleCalendar?: boolean;
    value: DateValueType;
    error?: string;
    helper?: string;
    required?: boolean;
    className?: string;
    onChange: (value: DateValueType) => void;
    onError?: (error: string) => void;
}
declare const _default: import("react").MemoExoticComponent<({ size, label, isSingleCalendar, value, error, helper, required, className, onChange, onError, ...props }: DatePickerProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
