'use client';

import { ReactNode } from 'react';
import { cn } from '../../utils/style';
import { HelperStyle, LabelStyle, ToogleBoxStyle } from './style';

interface ToggleProps {
	size?: 'sm' | 'md' | 'lg';
	activated: boolean;
	label?: ReactNode;
	helper?: string;
	disabled?: boolean;
	className?: string;
	onChange: (value: boolean) => void;
}

const Toggle = ({ size = 'sm', activated, label, helper, disabled = false, className, onChange }: ToggleProps) => {
	return (
		<div className={`flex items-center ${className}`}>
			<label className='relative inline-flex items-center gap-3'>
				<input
					type='checkbox'
					className='sr-only peer'
					checked={activated}
					disabled={disabled}
					onChange={() => onChange(!activated)}
				/>
				<div className={cn(ToogleBoxStyle({ size }))} />
				{label && (
					<div>
						<div className={cn(LabelStyle({ size, disabled }))}>{label}</div>
						{helper && <p className={cn(HelperStyle({ disabled }))}>{helper}</p>}
					</div>
				)}
			</label>
		</div>
	);
};

export default Toggle;
