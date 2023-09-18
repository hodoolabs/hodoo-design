'use client';

import { memo } from 'react';
import { styled } from 'styled-components';
import { ButtonGroupType } from '../../types/buttonGroup';
import { cn } from '../../utils/style';
import { ButtonStyle } from './style';

interface ButtonGroupProps {
	buttons: ButtonGroupType[];
	active?: string;
	className?: string;
	onActive: (id: string) => void;
}

const ButtonGroup = ({ buttons, active, className, onActive }: ButtonGroupProps) => {
	return (
		<ButtonGroupStyled className={className}>
			{buttons.map((button) => (
				<button className={cn(ButtonStyle({ active: active === button.id }))} onClick={() => onActive(button.id)}>
					{button.label}
				</button>
			))}
		</ButtonGroupStyled>
	);
};

export default memo(
	ButtonGroup,
	(prev: ButtonGroupProps, next: ButtonGroupProps) => prev.buttons === next.buttons && prev.className === next.className
);

const ButtonGroupStyled = styled.div`
	.active-button + button {
		border-left: 1px solid #c3ddfd;
	}
`;
