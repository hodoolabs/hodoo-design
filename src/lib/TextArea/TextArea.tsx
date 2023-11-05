'use client';

import { ReactNode, memo, useEffect } from 'react';
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import { ErrorStyle, HelperStyle, LabelStyle, MaxLengthStyle, TextareaStyle } from './style';

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
	const isError = !!error;

	useEffect(() => {
		if (!onError) return;

		onError('');
	}, [value]);

	return (
		<TextAreaStyled className={`flex flex-col ${className}`}>
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
			<textarea
				value={value}
				maxLength={maxLength}
				placeholder={placeholder}
				disabled={disabled}
				className={cn(TextareaStyle({ size, isError }))}
				onChange={(event) => onChange && onChange(event.target.value)}
				style={{ height: height }}
			/>
			{helper && <div className={cn(HelperStyle({ size }))}>{helper}</div>}
			<div className={cn(ErrorStyle({ size, isError }))}>{error}</div>
		</TextAreaStyled>
	);
};

export default memo(
	TextArea,
	(prev: TextAreaProps, next: TextAreaProps) =>
		prev.size === next.size &&
		prev.value === next.value &&
		prev.error === next.error &&
		prev.label === next.label &&
		prev.maxLength === next.maxLength &&
		prev.placeholder === next.placeholder &&
		prev.helper === next.helper &&
		prev.disabled === next.disabled &&
		prev.height === next.height &&
		prev.required === next.required &&
		prev.className === next.className &&
		prev.onChange === next.onChange &&
		prev.onError === next.onError
);

const TextAreaStyled = styled.div`
	.scroll-none::-webkit-scrollbar {
		display: none;
	}

	.scroll-none::-webkit-scrollbar-thumb {
		display: none;
	}
`;
