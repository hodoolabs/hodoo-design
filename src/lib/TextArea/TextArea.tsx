'use client';

import { ChangeEvent, ReactNode, useEffect } from 'react';
import { cn } from '../../utils/style';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Helper from '../Helper/Helper';
import Label from '../Label/Label';
import { TextareaStyle } from './style';

interface TextAreaProps {
	size?: 'lg' | 'sm';
	value: string;
	error?: string;
	label?: ReactNode;
	maxLength?: number;
	placeholder?: string;
	helper?: ReactNode;
	disabled?: boolean;
	height?: number;
	required?: boolean;
	className?: string;
	onChange?: (value: string) => void;
	onError?: (error: string) => void;
}

const TextArea = ({
	size = 'lg',
	label,
	value,
	error,
	maxLength,
	placeholder,
	helper,
	disabled,
	height,
	required,
	className,
	onChange,
	onError,
}: TextAreaProps) => {
	useEffect(() => {
		if (!onError) return;

		onError('');
	}, [value]);

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
			<textarea
				value={value}
				maxLength={maxLength}
				placeholder={placeholder}
				disabled={disabled}
				className={cn(TextareaStyle({ size, error: !!error }))}
				onChange={handleChange}
				style={{ height }}
			/>
			<Helper size={size} error={error} helper={helper} disabled={disabled} />
			<ErrorMessage size={size} error={error} />
		</div>
	);
};

export default TextArea;
