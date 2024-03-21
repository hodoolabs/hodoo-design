'use client';

import { ChangeEvent, HTMLInputTypeAttribute, ReactNode, useEffect } from 'react';
import { cn } from '../../utils/style';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Helper from '../Helper/Helper';
import Label from '../Label/Label';
import { InputStyle } from './style';

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
	useEffect(() => {
		if (!onError) return;

		onError('');
	}, [value]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		if (!onChange) return;
		if (maxLength && value.length > maxLength) return;

		onChange(value);
	};

	return (
		<div className={`flex flex-col ${className}`}>
			<Label
				size={size}
				value={value}
				error={error}
				label={label}
				maxLength={maxLength}
				disabled={disabled}
				required={required}
			/>
			<input
				type={type}
				value={value}
				maxLength={maxLength}
				placeholder={placeholder}
				disabled={disabled}
				className={cn(InputStyle({ size, error: !!error }))}
				onBlur={(event) => onBlur && onBlur(event.target.value)}
				onChange={handleChange}
				onKeyDown={(event) => event.key === 'Enter' && onEnter && onEnter()}
			/>
			<Helper size={size} error={error} helper={helper} disabled={disabled} />
			<ErrorMessage size={size} error={error} />
		</div>
	);
};

export default Input;
