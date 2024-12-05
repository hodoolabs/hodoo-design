'use client';

CalendarIcon;
import { throttle } from 'lodash';
import { ReactNode, useEffect, useState } from 'react';
import Datepicker, { DateValueType, DatepickerType } from 'react-tailwindcss-datepicker';
import { cn } from '../../utils/style';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Helper from '../Helper/Helper';
import Label from '../Label/Label';
import { InputStyle, SkeletonStyle, ToggleStyle } from './style';
import { CalendarIcon } from '@heroicons/react/24/outline';
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

const DatePicker = ({
	size = 'lg',
	label,
	error,
	helper,
	required,
	disabled = false,
	className,
	onError,
	onChange,
	...props
}: DatePickerProps) => {
	const locale = i18nAdapter.useLocale();

	const [isDestory, setIsDestroy] = useState(false);

	const handleChangeDate = (date: DateValueType, event: HTMLInputElement, placeholder?: string) => {
		if (!placeholder && !date?.startDate && !date?.endDate) event.oncancel;
		else {
			onChange(date);
			onError && onError('');
		}

		setIsDestroy(true);
	};

	useEffect(() => {
		const handleResizeBrowser = throttle(() => {
			setIsDestroy(true);
		}, 1000);

		window.addEventListener('resize', handleResizeBrowser);
		return () => {
			window.removeEventListener('resize', handleResizeBrowser);
		};
	}, []);

	useEffect(() => {
		if (!isDestory) return;

		setIsDestroy(false);
	}, [isDestory]);

	return (
		<div className={`flex flex-col ${className}`}>
			<Label size={size} error={error} label={label} disabled={disabled} required={required} />
			{!isDestory ? (
				<Datepicker
					i18n={locale}
					readOnly={true}
					displayFormat={props.displayFormat}
					startFrom={props.value?.startDate ? new Date(props.value?.startDate) : new Date()}
					toggleIcon={() => <CalendarIcon className='w-5 h-5' />}
					toggleClassName={cn(ToggleStyle({ size, error: !!error, disabled }))}
					inputClassName={cn(InputStyle({ size, error: !!error, disabled }))}
					placeholder={props.placeholder || ' '}
					disabled={disabled}
					onChange={(date, event) => event && handleChangeDate(date, event, props.placeholder)}
					{...props}
				/>
			) : (
				<div className={cn(SkeletonStyle({ size }))} />
			)}
			<Helper size={size} error={error} helper={helper} disabled={disabled} />
			<ErrorMessage size={size} error={error} />
		</div>
	);
};

export default DatePicker;

let i18nAdapter: I18nAdapter = new DefaultI18nAdapter();

const configureDatePickerI18n = (adapter: I18nAdapter) => {
	i18nAdapter = adapter;
};

/**
 * @description 만약 next-intl을 사용하는 경우 앱 최초로 init 하는곳에서 nextintladapter로 configureDatePickerI18n를 실행
 * @example
 * // 앱 최상단 init 하는곳
 * import NextIntlAdapter from './next-intl-Adapter';
 * configureDatePickerI18n(new NextIntlAdapter());
 */

export { DefaultI18nAdapter, NextIntlAdapter, configureDatePickerI18n };
