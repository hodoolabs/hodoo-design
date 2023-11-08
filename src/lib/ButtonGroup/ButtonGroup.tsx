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
		<ButtonGroupStyled className={className}>
			{buttons.map((button) => (
				<button
					key={button.value}
					className={cn(ButtonStyle({ active: active === button.value }))}
					onClick={() => onActive(button.value)}
				>
					{button.label}
				</button>
			))}
		</ButtonGroupStyled>
	);
};

export default ButtonGroup;

const ButtonGroupStyled = styled.div`
	.active-button + button {
		border-left: 1px solid #c3ddfd;
	}
`;
