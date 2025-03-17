'use client';

import { ReactNode } from 'react';
import { cn } from '../../utils/style';
import Label from '../Label/Label';
import { ButtonStyle, InputLabelStyle } from './style';
import Helper from '../Helper/Helper';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface FileInputProps {
	size?: 'lg' | 'sm';
	value: string;
	buttonName: string;
	accept?: string;
	label?: ReactNode;
	error?: string;
	placeholder?: string;
	helper?: ReactNode;
	required?: boolean;
	multiple?: boolean;
	disabled?: boolean;
	className?: string;
	onChange: (files: FileList) => void;
}

const FileInput = ({
	size = 'lg',
	value,
	buttonName,
	accept,
	label,
	error,
	placeholder,
	helper,
	required,
	multiple = false,
	disabled = false,
	className,
	onChange,
}: FileInputProps) => {
	const getLabelType = (value: string, error?: string) => {
		if (value && !error) return 'value';
		if (value && error) return 'valueError';
		if (!value && !error) return 'placeholder';
		if (!value && error) return 'placeholderError';
	};

	return (
		<div className={`flex flex-col ${className}`}>
			<Label size={size} error={error} label={label} disabled={disabled} required={required} />
			<div className='relative flex w-full group'>
				<button className={cn(ButtonStyle({ size, disabled }))}>{buttonName}</button>
				<label className={cn(InputLabelStyle({ size, type: getLabelType(value, error) }))}>
					<span className='block overflow-hidden whitespace-nowrap'>{value || placeholder}</span>
				</label>
				<input
					accept={accept}
					type='file'
					multiple={multiple}
					onClick={(event) => ((event.target as HTMLInputElement).value = '')}
					onChange={(event) => event.target.files && onChange(event.target.files)}
					className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-1'
				/>
			</div>
			<Helper size={size} error={error} helper={helper} disabled={disabled} />
			<ErrorMessage size={size} error={error} />
		</div>
	);
};

export default FileInput;
