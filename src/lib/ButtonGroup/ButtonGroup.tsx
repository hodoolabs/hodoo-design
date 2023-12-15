'use client';

import { styled } from 'styled-components';
import { ButtonGroupType } from '../../types/buttonGroup';
import { cn } from '../../utils/style';
import { ButtonStyle } from './style';

interface ButtonGroupProps {
	buttons: ButtonGroupType[];
	active: string;
	className?: string;
	onActive: (value: string) => void;
}

const ButtonGroup = ({ buttons, active, className, onActive }: ButtonGroupProps) => {
	return (
		<div className={className}>
			{buttons.map((button) => (
				<button
					key={button.value}
					className={cn(ButtonStyle({ active: active === button.value }))}
					onClick={() => onActive(button.value)}
				>
					{button.label}
				</button>
			))}
		</div>
	);
};

export default ButtonGroup;
