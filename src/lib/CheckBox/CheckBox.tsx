'use client';

import { memo } from 'react';
import { cn } from '../../utils/style';
import CheckedDisabledSvg from './images/CheckedDisabledSvg';
import CheckedSvg from './images/CheckedSvg';
import { CheckBoxStyle, HelperStyle, LabelStyle } from './style';

interface CheckBoxProps {
	checked: boolean;
	label?: string;
	helper?: string;
	disabled?: boolean;
	className?: string;
	onChange: (value: boolean) => void;
}

const CheckBox = ({ checked, label, helper, disabled = false, className, onChange }: CheckBoxProps) => {
	return (
		<div className={`inline-flex gap-3 ${className}`}>
			<button className={cn(CheckBoxStyle({ checked }))} disabled={disabled} onClick={() => onChange(!checked)}>
				{checked && (disabled ? <CheckedDisabledSvg /> : <CheckedSvg />)}
			</button>
			{label && (
				<div className='flex flex-col gap-1'>
					<label className={cn(LabelStyle({ disabled }))} onClick={() => !disabled && onChange(!checked)}>
						{label}
					</label>
					{helper && <p className={cn(HelperStyle({ disabled }))}>{helper}</p>}
				</div>
			)}
		</div>
	);
};

export default memo(
	CheckBox,
	(prev: CheckBoxProps, next: CheckBoxProps) =>
		prev.checked === next.checked &&
		prev.label === next.label &&
		prev.helper === next.helper &&
		prev.disabled === next.disabled &&
		prev.className === next.className &&
		prev.onChange === next.onChange
);
