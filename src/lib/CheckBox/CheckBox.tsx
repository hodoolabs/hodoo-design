'use client';

import { useEffect, useState } from 'react';
import { cn } from '../../utils/style';
import CheckedDisabledSvg from './images/CheckedDisabledSvg';
import CheckedSvg from './images/CheckedSvg';
import { CheckBoxStyle, HelperStyle, LabelStyle } from './style';

interface CheckBoxProps {
	checked: boolean;
	color?: string;
	label?: string;
	helper?: string;
	error?: boolean;
	disabled?: boolean;
	className?: string;
	onChange: (value: boolean) => void;
}

const CheckBox = ({
	checked,
	color,
	label,
	helper,
	error = false,
	disabled = false,
	className,
	onChange,
}: CheckBoxProps) => {
	const [isError, setIsError] = useState(error);

	useEffect(() => {
		if (isError && checked) {
			setIsError(false);
		}
	}, [isError]);

	return (
		<div className={`inline-flex gap-3 ${className}`}>
			<button className={cn(CheckBoxStyle({ checked }))} disabled={disabled} onClick={() => onChange(!checked)}>
				{checked && (disabled ? <CheckedDisabledSvg /> : <CheckedSvg color={color} />)}
			</button>
			{label && (
				<div className='flex flex-col gap-1'>
					<label
						className={cn(LabelStyle({ disabled, error: isError }))}
						onClick={() => !disabled && onChange(!checked)}
					>
						{label}
					</label>
					{helper && <p className={cn(HelperStyle({ disabled, error: isError }))}>{helper}</p>}
				</div>
			)}
		</div>
	);
};

export default CheckBox;
