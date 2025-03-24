'use client';

import { ReactNode } from 'react';
import { cn } from '../../utils/style';
import { ButtonStyle, ImageStyle } from './style';

interface ButtonProps {
	color?: 'black' | 'blue' | 'white' | 'gray' | 'red' | 'white_line';
	size?: 'lg' | 'md' | 'base' | 'sm';
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	label?: string;
	disabled?: boolean;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
	color = 'black',
	size = 'lg',
	leftIcon,
	rightIcon,
	label,
	disabled,
	className,
	onClick,
}: ButtonProps) => {
	const iconOnly = !label ? size : null;

	return (
		<button
			type='button'
			className={`${cn(ButtonStyle({ color, size, iconOnly, disabled }))} ${className}`}
			disabled={disabled}
			onClick={(e) => onClick && onClick(e)}
		>
			{leftIcon && <div className={cn(ImageStyle({ size, iconOnly }))}>{leftIcon}</div>}
			{label && <span>{label}</span>}
			{rightIcon && <div className={cn(ImageStyle({ size, iconOnly }))}>{rightIcon}</div>}
		</button>
	);
};

export default Button;
