'use client';

import { ReactNode, memo } from 'react';
import { cn } from '../../utils/style';
import { ButtonStyle, ImageStyle } from './style';

interface ButtonProps {
	color: 'black' | 'blue' | 'white' | 'gray' | 'red' | 'white_line';
	size: 'lg' | 'md' | 'base' | 'sm';
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	label?: string;
	disabled?: boolean;
	className?: string;
	onClick?: () => void;
}

const Button = ({ color, size, leftIcon, rightIcon, label, disabled, className, onClick }: ButtonProps) => {
	const iconOnly = !label ? size : null;

	return (
		<button
			type='button'
			className={`${cn(ButtonStyle({ color, size, iconOnly, disabled }))} ${className}`}
			disabled={disabled}
			onClick={onClick}
		>
			{leftIcon && <div className={cn(ImageStyle({ size, iconOnly }))}>{leftIcon}</div>}
			{label && <span>{label}</span>}
			{rightIcon && <div className={cn(ImageStyle({ size, iconOnly }))}>{rightIcon}</div>}
		</button>
	);
};

export default memo(
	Button,
	(prev: ButtonProps, next: ButtonProps) =>
		prev.color === next.color &&
		prev.size === next.size &&
		prev.leftIcon === next.leftIcon &&
		prev.rightIcon === next.rightIcon &&
		prev.label === next.label &&
		prev.disabled === next.disabled &&
		prev.className === next.className &&
		prev.onClick === next.onClick
);
