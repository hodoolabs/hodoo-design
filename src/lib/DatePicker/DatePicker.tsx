'use client';

import { memo, useEffect, useState } from 'react';
import Datepicker, { DateValueType, DatepickerType } from 'react-tailwindcss-datepicker';
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import { ErrorStyle, InputStyle, LabelStyle, ToggleStyle } from './style';

interface DatePickerProps extends DatepickerType {
	size: 'lg' | 'sm';
	label?: string | JSX.Element;
	value: DateValueType;
	error?: string;
	helper?: string;
	required?: boolean;
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
	className,
	onChange,
	onError,
	...props
}: DatePickerProps) => {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!onError) return;

		onError('');
	}, [value?.startDate, value?.endDate]);

	useEffect(() => {
		setIsLoading(false);
	}, [value?.startDate]);

	return (
		<DatePickerStyled className={`flex flex-col ${className}`}>
			{label && (
				<label className={cn(LabelStyle({ error: !!error }))}>
					{required && <span className='text-red-600'>*</span>} {label}
				</label>
			)}
			{!isLoading && (
				<Datepicker
					value={value}
					readOnly={true}
					startFrom={new Date(value?.startDate!)}
					toggleClassName={cn(ToggleStyle({ size, error: !!error }))}
					inputClassName={cn(InputStyle({ size, error: !!error }))}
					onChange={(date) => {
						setIsLoading(true);
						onChange(date);
					}}
					{...props}
				/>
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
		prev.onChange === next.onChange &&
		prev.onError === next.onError
);

const DatePickerStyled = styled.div`
	.transition-300 {
		transition: 0.3s;
	}
`;
