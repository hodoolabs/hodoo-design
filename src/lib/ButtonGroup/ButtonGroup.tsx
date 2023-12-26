'use client';

import { ReactNode, useEffect } from 'react';
import { ButtonGroupType } from '../../types/buttonGroup';
import { cn } from '../../utils/style';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Helper from '../Helper/Helper';
import Label from '../Label/Label';
import { ButtonStyle } from './style';

interface ButtonGroupProps {
	type?: 'primary' | 'secondary';
	active: string;
	error?: string;
	buttons: ButtonGroupType[];
	label?: ReactNode;
	helper?: ReactNode;
	disabled?: boolean;
	required?: boolean;
	className?: string;
	onActive: (active: string) => void;
	onError?: (error: string) => void;
}

const ButtonGroup = ({
	type = 'primary',
	active,
	error,
	buttons,
	label,
	helper,
	disabled,
	required,
	className,
	onActive,
	onError,
}: ButtonGroupProps) => {
	useEffect(() => {
		if (!onError) return;

		onError('');
	}, [active]);

	return (
		<div className={`flex flex-col ${className}`}>
			<Label error={error} label={label} disabled={disabled} required={required} />
			{type === 'primary' ? (
				<div>
					{buttons.map((button) => (
						<button
							key={button.value}
							disabled={disabled}
							className={cn(ButtonStyle({ active: active === button.value }))}
							onClick={() => onActive(button.value)}
						>
							{button.label}
						</button>
					))}
				</div>
			) : type === 'secondary' ? (
				<div className='flex gap-2'>
					{buttons.map((item) => (
						<Button
							key={item.value}
							color={active !== item.value ? 'white_line' : 'blue'}
							size='md'
							label={item.label}
							disabled={active !== item.value && disabled}
							onClick={() => onActive(item.value)}
						/>
					))}
				</div>
			) : null}
			<Helper size='lg' error={error} helper={helper} disabled={disabled} />
			<ErrorMessage size='lg' error={error} />
		</div>
	);
};

export default ButtonGroup;
