'use client';

import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { throttle } from 'lodash';
import { ReactNode, useEffect, useState } from 'react';
import Datepicker, { DateValueType, DatepickerType } from 'react-tailwindcss-datepicker';
import { InputStyle, SkeletonStyle, ToggleStyle } from './style';
import Label from '../Label/Label';
import Helper from '../Helper/Helper';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { cn } from '../../utils/style';

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
					i18n='ko'
					readOnly={true}
					displayFormat={props.displayFormat}
					startFrom={props.value?.startDate ? new Date(props.value?.startDate) : new Date()}
					toggleIcon={() => <CalendarDaysIcon className='w-5 h-5' />}
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
