import { ReactNode } from 'react';
import { DatepickerType } from 'react-tailwindcss-datepicker';
import DefaultI18nAdapter from './defaultAdapter';
import NextIntlAdapter from './next-intl-Adapter';
import { I18nAdapter } from './types';

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
declare const configureDatePickerI18n: (adapter: I18nAdapter) => void;
/**
 * @description 만약 next-intl을 사용하는 경우 앱 최초로 init 하는곳에서 nextintladapter로 configureDatePickerI18n를 실행
 * @example
 * // 앱 최상단 init 하는곳
 * import NextIntlAdapter from './next-intl-Adapter';
 * configureDatePickerI18n(new NextIntlAdapter());
 */
export { DefaultI18nAdapter, NextIntlAdapter, configureDatePickerI18n };
