'use client';

import { memo, useEffect } from 'react';
import Datepicker, { DateValueType, DatepickerType } from 'react-tailwindcss-datepicker';
import { cn } from '../../utils/style';
import { ErrorStyle, InputStyle, LabelStyle, ToggleStyle } from './style';
import { styled } from 'styled-components';

interface DatePickerProps extends DatepickerType {
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

const DatePicker = ({
	label,
	isSingleCalendar,
	value,
	error,
	helper,
	required,
	className,
	onChange,
	onError,
	...props
}: DatePickerProps) => {
	useEffect(() => {
		if (!onError) return;

		onError('');
	}, [value?.startDate, value?.endDate]);

	return (
		<DatePickerStyled className={`flex flex-col ${className}`}>
			{label && (
				<label className={cn(LabelStyle({ error: !!error }))}>
					{required && <span className='text-red-600'>*</span>} {label}
				</label>
			)}
			<Datepicker
				value={value}
				useRange={!isSingleCalendar}
				asSingle={isSingleCalendar}
				readOnly={true}
				toggleClassName={cn(ToggleStyle({ error: !!error }))}
				inputClassName={cn(InputStyle({ error: !!error }))}
				onChange={onChange}
				{...props}
			/>
			{helper && <div className='pt-2 text-sm font-medium text-gray-500'>{helper}</div>}
			<div className={cn(ErrorStyle({ error: !!error }))}>{error}</div>
		</DatePickerStyled>
	);
};

export default memo(
	DatePicker,
	(prev: DatePickerProps, next: DatePickerProps) =>
		prev.label === next.label &&
		prev.isSingleCalendar === next.isSingleCalendar &&
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
