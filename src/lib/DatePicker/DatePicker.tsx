'use client';

import { CalendarIcon } from '@heroicons/react/24/outline';
import { throttle } from 'lodash';
import { ReactNode, Suspense, useEffect, useState } from 'react';
import type { DatepickerType, DateValueType } from 'react-tailwindcss-datepicker';
import { cn } from '../../utils/style';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Helper from '../Helper/Helper';
import Label from '../Label/Label';
import DefaultI18nAdapter from './defaultAdapter';
import { InputStyle, SkeletonStyle, ToggleStyle } from './style';
import { I18nAdapter } from './types';
import Datepicker from 'react-tailwindcss-datepicker';
import NextIntlAdapter from './next-intl-Adapter';
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

const isClient = typeof window !== 'undefined';

const DatePickerComponent = ({
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
	const [isMounted, setIsMounted] = useState(false);
	const [isDestroy, setIsDestroy] = useState(false);

	// 클라이언트 사이드에서만 렌더링
	useEffect(() => {
		setIsMounted(true);
		return () => setIsMounted(false);
	}, []);

	const handleChangeDate = (date: DateValueType, event: HTMLInputElement, placeholder?: string) => {
		if (!placeholder && !date?.startDate && !date?.endDate) event.oncancel;
		else {
			onChange && onChange(date);
			onError && onError('');
		}

		setIsDestroy(true);
	};

	useEffect(() => {
		if (!isClient) return;

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

	if (!isMounted) {
		return <div className='h-10 bg-gray-200 rounded animate-pulse' />;
	}

	return (
		<div className={`flex flex-col ${className}`}>
			<Label size={size} error={error} label={label} disabled={disabled} required={required} />
			{isMounted && !isDestroy && isClient ? (
				<Suspense fallback={<div className={cn(SkeletonStyle({ size }))} />}>
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
				</Suspense>
			) : (
				<div className={cn(SkeletonStyle({ size }))} />
			)}
			<Helper size={size} error={error} helper={helper} disabled={disabled} />
			<ErrorMessage size={size} error={error} />
		</div>
	);
};

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

DatePickerComponent.displayName = 'DatePicker';
export default DatePickerComponent;
