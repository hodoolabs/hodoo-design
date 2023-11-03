'use client';

import { memo } from 'react';
import { cn } from '../../utils/style';
import RadioDisabledSvg from './images/RadioDisabledSvg';
import RadioSvg from './images/RadioSvg';
import { HelperStyle, LabelStyle, RadioStyle } from './style';

interface RadioProps {
	id: string;
	selected: string;
	label?: string;
	helper?: string;
	disabled?: boolean;
	className?: string;
	onChange: (value: string) => void;
}

const Radio = ({ id, selected, label, helper, disabled = false, className, onChange }: RadioProps) => {
	const isSelected = id === selected;

	return (
		<div className={`inline-flex gap-3 ${className}`}>
			<button className={cn(RadioStyle({ isSelected }))} disabled={disabled} onClick={() => onChange(id)}>
				{isSelected && (disabled ? <RadioDisabledSvg /> : <RadioSvg />)}
			</button>
			{label && (
				<div className='flex flex-col gap-1'>
					<label className={cn(LabelStyle({ disabled }))} onClick={() => !disabled && onChange(id)}>
						{label}
					</label>
					{helper && <p className={cn(HelperStyle({ disabled }))}>{helper}</p>}
				</div>
			)}
		</div>
	);
};

export default memo(
	Radio,
	(prev: RadioProps, next: RadioProps) =>
		prev.id === next.id &&
		prev.selected === next.selected &&
		prev.label === next.label &&
		prev.helper === next.helper &&
		prev.disabled === next.disabled &&
		prev.className === next.className &&
		prev.onChange === next.onChange,
);
