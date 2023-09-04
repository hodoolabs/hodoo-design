'use client';

import { HTMLInputTypeAttribute, memo, useEffect } from 'react';
import { cn } from '../../utils/style';
import { ErrorStyle, HelperStyle, InputStyle, LabelStyle, MaxLengthStyle } from './style';

interface InputProps {
	type?: HTMLInputTypeAttribute;
	size: 'lg' | 'sm';
	label?: string | JSX.Element;
	value: string;
	error?: string;
	maxLength?: number;
	placeholder?: string;
	helper?: JSX.Element;
	disabled?: boolean;
	required?: boolean;
	onChange?: (value: string) => void;
	onError?: (error: string) => void;
	onEnter?: () => void;
}

const Input = ({
	type = 'text',
	size,
	label,
	value,
	error,
	maxLength,
	placeholder,
	helper,
	disabled,
	required,
	onChange,
	onError,
	onEnter,
}: InputProps) => {
	useEffect(() => {
		if (!onError) return;

		onError('');
	}, [value]);

	return (
		<div className='w-full'>
			{label && (
				<label className={cn(LabelStyle({ size, error: !!error }))}>
					{required && <span className='text-red-600'>*</span>} {label}
					{maxLength && (
						<span className={cn(MaxLengthStyle({ error: !!error }))}>
							{value.length}/{maxLength}
						</span>
					)}
				</label>
			)}
			<input
				className={cn(InputStyle({ size, error: !!error }))}
				type={type}
				value={value}
				maxLength={maxLength}
				placeholder={placeholder}
				disabled={disabled}
				onChange={(event) => onChange && onChange(event.target.value)}
				onKeyDown={(event) => event.key === 'Enter' && onEnter && onEnter()}
			/>
			{helper && <div className={cn(HelperStyle({ size }))}>{helper}</div>}
			<div className={cn(ErrorStyle({ size, error: !!error }))}>{error}</div>
		</div>
	);
};

export default memo(
	Input,
	(prev: InputProps, next: InputProps) =>
		prev.type === next.type &&
		prev.size === next.size &&
		prev.label === next.label &&
		prev.value === next.value &&
		prev.error === next.error &&
		prev.maxLength === next.maxLength &&
		prev.placeholder === next.placeholder &&
		prev.helper === next.helper &&
		prev.disabled === next.disabled &&
		prev.required === next.required &&
		prev.onChange === next.onChange &&
		prev.onError === next.onError &&
		prev.onEnter === next.onEnter
);
