import { ReactNode } from 'react';
import { DatepickerType } from 'react-tailwindcss-datepicker';
import DefaultI18nAdapter from './defaultAdapter';
import NextIntlAdapter from './next-intl-Adapter';
import { I18nAdapter } from './types';
export declare const configureDatePickerI18n: (adapter: I18nAdapter) => void;
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
export { DefaultI18nAdapter, NextIntlAdapter };
