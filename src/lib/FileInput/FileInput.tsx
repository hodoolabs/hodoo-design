'use client';

import { memo } from 'react';
import { cn } from '../../utils/style';
import { ButtonStyle, ErrorStyle, HelperStyle, InputLabelStyle, LabelStyle } from './style';
import { styled } from 'styled-components';

interface FileInputProps {
	size: 'lg' | 'sm';
	label?: string | JSX.Element;
	value: string;
	error?: string;
	buttonName: string;
	placeholder?: string;
	helper?: string | JSX.Element;
	required?: boolean;
	onChange: (files: FileList) => void;
}

const FileInput = ({
	size,
	label,
	value,
	error,
	buttonName,
	placeholder,
	helper,
	required,
	onChange,
}: FileInputProps) => {
	const getLabelStatus = (value: string, error: string) => {
		if (value && !error) return 'value';
		if (value && error) return 'valueError';
		if (!value && !error) return 'placeholder';
		if (!value && error) return 'placeholderError';
	};

	return (
		<FileInputStyled className='flex flex-col'>
			{label && (
				<label className={cn(LabelStyle({ size, error: !!error }))}>
					{required && <span className='text-red-600'>*</span>} {label}
				</label>
			)}
			<div className='relative flex w-full group'>
				<button className={cn(ButtonStyle({ size }))}>{buttonName}</button>
				{
					<label className={cn(InputLabelStyle({ size, error: getLabelStatus(value, error!) }))}>
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
			<div className={cn(ErrorStyle({ size, error: !!error }))}>{error}</div>
		</FileInputStyled>
	);
};

export default memo(
	FileInput,
	(prev: FileInputProps, next: FileInputProps) =>
		prev.size === next.size &&
		prev.label === next.label &&
		prev.value === next.value &&
		prev.error === next.error &&
		prev.buttonName === next.buttonName &&
		prev.placeholder === next.placeholder &&
		prev.helper === next.helper &&
		prev.required === next.required &&
		prev.onChange === next.onChange
);

const FileInputStyled = styled.div`
	.transition-300 {
		transition: 0.3s;
	}
`;
