'use client';

import { ChangeEvent, forwardRef, HTMLInputTypeAttribute, ReactNode, RefObject, useEffect } from 'react';
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
	/**
	 * @see autoComplete 자세한 사용법은 https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
	 */
	autoComplete?: JSX.IntrinsicElements['input']['autoComplete'];
	ref?: RefObject<HTMLInputElement>;
	onBlur?: (value: string) => void;
	onChange?: (value: string) => void;
	onError?: (error: string) => void;
	onEnter?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			type = 'text',
			size = 'lg',
			autoComplete = 'off',
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
		},
		ref
	) => {
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
					autoComplete={autoComplete}
					className={cn(InputStyle({ size, error: !!error }))}
					onBlur={(event) => onBlur && onBlur(event.target.value)}
					onChange={handleChange}
					onKeyDown={(event) => event.key === 'Enter' && onEnter && onEnter()}
					ref={ref}
				/>
				<Helper size={size} error={error} helper={helper} disabled={disabled} />
				<ErrorMessage size={size} error={error} />
			</div>
		);
	}
);

export default Input;
