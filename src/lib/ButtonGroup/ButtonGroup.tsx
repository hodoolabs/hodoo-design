'use client';

import { memo, useState } from 'react';
import { styled } from 'styled-components';
import { ButtonGroupType } from '../../types/buttonGroup';
import { cn } from '../../utils/style';
import { ButtonStyle } from './style';

interface ButtonGroupProps {
	buttons: ButtonGroupType[];
	defaultActive?: number;
	className?: string;
}

const ButtonGroup = ({ buttons, defaultActive = 0, className }: ButtonGroupProps) => {
	const [active, setActive] = useState(defaultActive ? buttons[defaultActive].id : null);

	return (
		<ButtonGroupStyled className={className}>
			{buttons.map((button, index) => (
				<button
					className={cn(ButtonStyle({ active: active === index }))}
					onClick={() => {
						button.onClick;
						setActive(index);
					}}
				>
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
