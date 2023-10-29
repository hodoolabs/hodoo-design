'use client';

import { ReactNode, memo } from 'react';
import { cn } from '../../utils/style';
import { ButtonStyle, ErrorStyle, HelperStyle, InputLabelStyle, LabelStyle } from './style';

interface FileInputProps {
	size: 'lg' | 'sm';
	value: string;
	buttonName: string;
	label?: ReactNode;
	error?: string;
	placeholder?: string;
	helper?: ReactNode;
	required?: boolean;
	className?: string;
	onChange: (files: FileList) => void;
}

const FileInput = ({
	size,
	value,
	buttonName,
	label,
	error,
	placeholder,
	helper,
	required,
	className,
	onChange,
}: FileInputProps) => {
	const isError = !!error;

	const getLabelType = (value: string, error?: string) => {
		if (value && !error) return 'value';
		if (value && error) return 'valueError';
		if (!value && !error) return 'placeholder';
		if (!value && error) return 'placeholderError';
	};

	return (
		<div className={`flex flex-col ${className}`}>
			{label && (
				<label className={cn(LabelStyle({ size, isError }))}>
					{required && <span className='text-red-600'>*</span>} {label}
				</label>
			)}
			<div className='relative flex w-full group'>
				<button className={cn(ButtonStyle({ size }))}>{buttonName}</button>
				{
					<label className={cn(InputLabelStyle({ size, type: getLabelType(value, error) }))}>
						<span className='block overflow-hidden whitespace-nowrap'>{value || placeholder}</span>
					</label>
				}
				<input
					type='file'
					onChange={(event) => event.target.files && onChange(event.target.files)}
					className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-1'
				/>
			</div>
			{helper && <div className={cn(HelperStyle({ size }))}>{helper}</div>}
			<div className={cn(ErrorStyle({ size, isError }))}>{error}</div>
		</div>
	);
};

export default memo(
	FileInput,
	(prev: FileInputProps, next: FileInputProps) =>
		prev.size === next.size &&
		prev.value === next.value &&
		prev.buttonName === next.buttonName &&
		prev.label === next.label &&
		prev.error === next.error &&
		prev.placeholder === next.placeholder &&
		prev.helper === next.helper &&
		prev.required === next.required &&
		prev.className === next.className &&
		prev.onChange === next.onChange
);
