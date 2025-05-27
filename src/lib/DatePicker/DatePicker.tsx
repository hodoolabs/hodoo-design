'use client';

import { CalendarIcon } from '@heroicons/react/24/outline';
import { throttle } from 'lodash';
import { ReactNode, useEffect, useState } from 'react';
import Datepicker, { DatepickerType, DateValueType } from 'react-tailwindcss-datepicker';
import { cn } from '../../utils/style';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Helper from '../Helper/Helper';
import Label from '../Label/Label';
import DefaultI18nAdapter from './defaultAdapter';
import { initNextIntl } from './init';
import { InputStyle, SkeletonStyle, ToggleStyle } from './style';
import { I18nAdapter } from './types';

// 자동으로 초기화 시도
if (typeof window !== 'undefined') {
	initNextIntl();
}

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

	const [isDestroy, setIsDestroy] = useState(false);

	const handleChangeDate = (date: DateValueType, event: HTMLInputElement, placeholder?: string) => {
		if (!placeholder && !date?.startDate && !date?.endDate) event.oncancel;
		else {
			onChange && onChange(date);
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
		if (!isDestroy) return;

		setIsDestroy(false);
	}, [isDestroy]);

	return (
		<div className={`flex flex-col ${className}`}>
			<Label size={size} error={error} label={label} disabled={disabled} required={required} />
			{!isDestroy ? (
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
					onChange={(date: DateValueType, event: any) => event && handleChangeDate(date, event, props.placeholder)}
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

export const configureDatePickerI18n = (adapter: I18nAdapter) => {
	i18nAdapter = adapter;
};

/**
 * @description 만약 next-intl을 사용하는 경우 앱 최초로 init 하는곳에서 아래와 같이 설정
 * @example
 * // 앱 최상단 init 하는곳
 * import { configureDatePickerI18n, NextIntlAdapter } from 'hodoo-design';
 *
 * configureDatePickerI18n(new NextIntlAdapter());
 */
