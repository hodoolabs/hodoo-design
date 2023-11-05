'use client';

import { HTMLInputTypeAttribute, ReactNode, memo, useEffect } from 'react';
import { cn } from '../../utils/style';
import { ErrorStyle, HelperStyle, InputStyle, LabelStyle, MaxLengthStyle } from './style';

interface InputProps {
	type?: HTMLInputTypeAttribute;
	size?: 'lg' | 'sm';
	value: string;
	error?: string;
	label?: ReactNode;
	maxLength?: number;
	placeholder?: string;
	helper?: ReactNode;
	disabled?: boolean;
	required?: boolean;
	className?: string;
	onBlur?: (value: string) => void;
	onChange?: (value: string) => void;
	onError?: (error: string) => void;
	onEnter?: () => void;
}

const Input = ({
	type = 'text',
	size = 'lg',
	label,
	value,
	error,
	maxLength,
	placeholder,
	helper,
	disabled,
	required,
	className,
	onBlur,
	onChange,
	onError,
	onEnter,
}: InputProps) => {
	const isError = !!error;

	useEffect(() => {
		if (!onError) return;

		onError('');
	}, [value]);

	return (
		<div className={`flex flex-col ${className}`}>
			{label && (
				<label className={cn(LabelStyle({ size, isError }))}>
					{required && <span className='text-red-600'>*</span>} {label}
					{maxLength && (
						<span className={cn(MaxLengthStyle({ isError }))}>
							{value.length}/{maxLength}
						</span>
					)}
				</label>
			)}
			<input
				type={type}
				value={value}
				maxLength={maxLength}
				placeholder={placeholder}
				disabled={disabled}
				className={cn(InputStyle({ size, isError }))}
				onBlur={(event) => onBlur && onBlur(event.target.value)}
				onChange={(event) => onChange && onChange(event.target.value)}
				onKeyDown={(event) => event.key === 'Enter' && onEnter && onEnter()}
			/>
			{helper && <div className={cn(HelperStyle({ size }))}>{helper}</div>}
			<div className={cn(ErrorStyle({ size, isError }))}>{error}</div>
		</div>
	);
};

export default memo(
	Input,
	(prev: InputProps, next: InputProps) =>
		prev.type === next.type &&
		prev.size === next.size &&
		prev.value === next.value &&
		prev.error === next.error &&
		prev.label === next.label &&
		prev.maxLength === next.maxLength &&
		prev.placeholder === next.placeholder &&
		prev.helper === next.helper &&
		prev.disabled === next.disabled &&
		prev.required === next.required &&
		prev.className === next.className &&
		prev.onBlur === next.onBlur &&
		prev.onChange === next.onChange &&
		prev.onError === next.onError &&
		prev.onEnter === next.onEnter
);
