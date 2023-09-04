'use client';

import { memo } from 'react';
import { cn } from '../../utils/style';
import { ButtonStyle, ImageStyle, LabelStyle } from './style';

interface ButtonProps {
	color: 'black' | 'blue' | 'white' | 'gray' | 'red' | 'white_line';
	size: 'lg' | 'md' | 'base' | 'sm';
	leftIcon?: JSX.Element;
	rightIcon?: JSX.Element;
	label?: string;
	disabled?: boolean;
	isFull?: boolean;
	className?: string;
	onClick: () => void;
}

const Button = ({
	color,
	size,
	leftIcon,
	rightIcon,
	label,
	disabled = false,
	isFull = false,
	className,
	onClick,
}: ButtonProps) => {
	return (
		<button
			type='button'
			className={`${cn(ButtonStyle({ color, size, iconOnly: !label ? size : null, isFull }))} ${className}`}
			disabled={disabled}
			onClick={onClick}
		>
			{leftIcon && (
				<div className={cn(ImageStyle({ size, color, iconOnly: !label ? size : null, disabled }))}>{leftIcon}</div>
			)}
			{label && <span className={cn(LabelStyle({ color, size, disabled }))}>{label}</span>}
			{rightIcon && (
				<div className={cn(ImageStyle({ size, color, iconOnly: !label ? size : null, disabled }))}>{rightIcon}</div>
			)}
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
		prev.className === next.className &&
		prev.disabled === next.disabled &&
		prev.isFull === next.isFull &&
		prev.className === next.className &&
		prev.onClick === next.onClick
);
