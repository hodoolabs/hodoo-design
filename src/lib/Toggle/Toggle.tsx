'use client';

import { memo } from 'react';
import { cn } from '../../utils/style';
import { HelperStyle, LabelStyle, ToogleBoxStyle } from './style';

interface ToggleProps {
	size: 'sm' | 'md' | 'lg';
	activated: boolean;
	label?: string;
	helper?: string;
	disabled?: boolean;
	onChange: (value: boolean) => void;
}

const Toggle = ({ size, activated, label, helper, disabled = false, onChange }: ToggleProps) => {
	return (
		<label className='relative inline-flex gap-3'>
			<input
				type='checkbox'
				className='sr-only peer'
				checked={activated}
				disabled={disabled}
				onChange={() => !disabled && onChange(!activated)}
			/>
			<div className={cn(ToogleBoxStyle({ size }))} />
			{label && (
				<div className='space-y-1 font-medium'>
					<p className={cn(LabelStyle({ disabled, size }))}>{label}</p>
					{helper && <p className={cn(HelperStyle({ disabled }))}>{helper}</p>}
				</div>
			)}
		</label>
	);
};

export default memo(
	Toggle,
	(prev: ToggleProps, next: ToggleProps) =>
		prev.size === next.size &&
		prev.activated === next.activated &&
		prev.label === next.label &&
		prev.helper === next.helper &&
		prev.disabled === next.disabled &&
		prev.onChange === next.onChange
);
