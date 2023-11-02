'use client';

import { memo, useEffect } from 'react';
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import { ErrorStyle, HelperStyle, LabelStyle, MaxLengthStyle, TextareaStyle } from './style';

interface TextAreaProps {
	size: 'lg' | 'sm';
	label?: string | JSX.Element;
	value: string;
	error?: string;
	maxLength?: number;
	placeholder?: string;
	helper?: string | JSX.Element;
	disabled?: boolean;
	height?: number;
	required?: boolean;
	className?: string;
	onChange?: (value: string) => void;
	onError?: (error: string) => void;
}

const TextArea = ({
	size,
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

	return (
		<TextAreaStyled className={`flex flex-col ${className}`}>
			{label && (
				<label className={cn(LabelStyle({ size, error: !!error }))}>
					{required && <span className='text-red-600'>*</span>} {label}
					{maxLength && (
						<span className={cn(MaxLengthStyle({ error: !!error }))}>
							{value?.length}/{maxLength}
						</span>
					)}
				</label>
			)}
			<textarea
				className={cn(TextareaStyle({ size, error: !!error }))}
				value={value}
				maxLength={maxLength}
				placeholder={placeholder}
				disabled={disabled}
				onChange={(event) => onChange && onChange(event.target.value)}
				style={{ height: height }}
			/>
			{helper && <div className={cn(HelperStyle({ size }))}>{helper}</div>}
			<div className={cn(ErrorStyle({ size, error: !!error }))}>{error}</div>
		</TextAreaStyled>
	);
};

export default memo(
	TextArea,
	(prev: TextAreaProps, next: TextAreaProps) =>
		prev.size === next.size &&
		prev.label === next.label &&
		prev.value === next.value &&
		prev.error === next.error &&
		prev.maxLength === next.maxLength &&
		prev.placeholder === next.placeholder &&
		prev.helper === next.helper &&
		prev.disabled === next.disabled &&
		prev.height === next.height &&
		prev.required === next.required &&
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

	.transition-300 {
		transition: 0.3s;
	}
`;
