'use client';

import { ReactNode } from 'react';
import { cn } from '../../utils/style';
import { LabelStyle, MaxLengthStyle, RequiredStyle } from './style';

interface LabelProps {
	size?: any;
	value?: string;
	error?: string;
	label?: ReactNode;
	maxLength?: number;
	disabled?: boolean;
	required?: boolean;
}

const Label = ({ size = 'lg', value = '', error, label, maxLength, disabled = false, required }: LabelProps) => {
	const isError = !!error;

	return (
		<>
			{label && (
				<label className={cn(LabelStyle({ size, isError, disabled }))}>
					{required && <span className={cn(RequiredStyle({ disabled }))}>*</span>} {label}
					{maxLength && (
						<span className={cn(MaxLengthStyle({ isError }))}>
							{value?.length || 0}/{maxLength}
						</span>
					)}
				</label>
			)}
		</>
	);
};

export default Label;
