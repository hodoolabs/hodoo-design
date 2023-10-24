'use client';

import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { throttle } from 'lodash';
import { ReactNode, memo, useEffect, useState } from 'react';
import Datepicker, { DateValueType, DatepickerType } from 'react-tailwindcss-datepicker';
import { cn } from '../../utils/style';
import { ErrorStyle, InputStyle, LabelStyle, SkeletonStyle, ToggleStyle } from './style';

interface DatePickerProps extends DatepickerType {
	size: 'lg' | 'sm';
	label?: ReactNode;
	error?: string;
	helper?: string;
	required?: boolean;
	className?: string;
	onError?: (error: string) => void;
}

const DatePicker = ({
	size,
	label,
	error,
	helper,
	required,
	className,
	onError,
	onChange,
	...props
}: DatePickerProps) => {
	const [isDestory, setIsDestroy] = useState(false);
	const isError = !!error;

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
			{label && (
				<label className={cn(LabelStyle({ isError }))}>
					{required && <span className='text-red-600'>*</span>} {label}
				</label>
			)}
			{!isDestory ? (
				<Datepicker
					i18n='ko'
					readOnly={true}
					displayFormat={props.displayFormat}
					startFrom={props.value?.startDate ? new Date(props.value?.startDate) : new Date()}
					toggleIcon={() => <CalendarDaysIcon className='w-5 h-5' />}
					toggleClassName={cn(ToggleStyle({ size, isError }))}
					inputClassName={cn(InputStyle({ size, isError }))}
					placeholder={props.placeholder || ' '}
					onChange={(date, event) => event && handleChangeDate(date, event, props.placeholder)}
					{...props}
				/>
			) : (
				<div className={cn(SkeletonStyle({ size }))} />
			)}
			{helper && <div className='pt-2 text-sm font-medium text-gray-500'>{helper}</div>}
			<div className={cn(ErrorStyle({ isError }))}>{error}</div>
		</div>
	);
};

export default memo(
	DatePicker,
	(prev: DatePickerProps, next: DatePickerProps) =>
		prev.size === next.size &&
		prev.label === next.label &&
		prev.error === next.error &&
		prev.helper === next.helper &&
		prev.required === next.required &&
		prev.className === next.className &&
		prev.onChange === next.onChange &&
		prev.onError === next.onError
);
