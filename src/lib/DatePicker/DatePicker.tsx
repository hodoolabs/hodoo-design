'use client';

import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import { memo, useEffect, useState } from 'react';
import Datepicker, { DateValueType, DatepickerType } from 'react-tailwindcss-datepicker';
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import { ErrorStyle, InputStyle, LabelStyle, SkeletonStyle, ToggleStyle } from './style';

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

const DatePicker = ({
	size,
	label,
	value,
	error,
	helper,
	required,
	isClose = true,
	className,
	onChange,
	onError,
	...props
}: DatePickerProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleChangeDate = (isClose: boolean, date: DateValueType) => {
		if (!isClose && date?.startDate === null && date?.endDate === null)
			onChange({ startDate: dayjs().format('YYYY-MM-DD'), endDate: dayjs().format('YYYY-MM-DD') });
		else onChange(date);
		setIsLoading(true);
	};

	useEffect(() => {
		if (!onError) return;

		onError('');
	}, [value?.startDate, value?.endDate]);

	useEffect(() => {
		if (!isLoading) return;

		setIsLoading(false);
	}, [isLoading]);

	return (
		<DatePickerStyled className={`flex flex-col ${className}`}>
			{label && (
				<label className={cn(LabelStyle({ error: !!error }))}>
					{required && <span className='text-red-600'>*</span>} {label}
				</label>
			)}
			{!isLoading ? (
				<Datepicker
					value={value}
					readOnly={true}
					startFrom={value?.startDate ? new Date(value?.startDate!) : new Date()}
					toggleIcon={() => <CalendarDaysIcon className='w-5 h-5' />}
					toggleClassName={cn(ToggleStyle({ size, error: !!error }))}
					inputClassName={cn(InputStyle({ size, error: !!error }))}
					placeholder={isClose ? '' : ' '}
					onChange={(date) => handleChangeDate(isClose, date)}
					{...props}
				/>
			) : (
				<div className={cn(SkeletonStyle({ size }))} />
			)}
			{helper && <div className='pt-2 text-sm font-medium text-gray-500'>{helper}</div>}
			<div className={cn(ErrorStyle({ error: !!error }))}>{error}</div>
		</DatePickerStyled>
	);
};

export default memo(
	DatePicker,
	(prev: DatePickerProps, next: DatePickerProps) =>
		prev.size === next.size &&
		prev.label === next.label &&
		prev.value?.startDate === next.value?.startDate &&
		prev.value?.endDate === next.value?.endDate &&
		prev.error === next.error &&
		prev.helper === next.helper &&
		prev.required === next.required &&
		prev.isClose === next.isClose &&
		prev.className === next.className &&
		prev.onChange === next.onChange &&
		prev.onError === next.onError
);

const DatePickerStyled = styled.div`
	.transition-300 {
		transition: 0.3s;
	}
`;
