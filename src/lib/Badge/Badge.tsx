'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';
import { cn } from '../../utils/style';
import { BadgeStyle, ButtonStyle, LabelStyle, LeftImageStyle, RightImageStyle } from './style';

interface BadgeProps {
	color: 'blue' | 'gray' | 'gray_low' | 'red';
	size: 'lg' | 'sm';
	leftIcon?: string | JSX.Element;
	close?: boolean;
	label?: string;
	className?: string;
	onClick?: () => void;
}

const Badge = ({ color, size, leftIcon, close, label, className, onClick }: BadgeProps) => {
	return (
		<div className={`${cn(BadgeStyle({ color, size, iconOnly: !label ? size : null }))} ${className}`}>
			{leftIcon && <div className={cn(LeftImageStyle({ color, size }))}>{leftIcon}</div>}
			{label && <span className={cn(LabelStyle({ color }))}>{label}</span>}
			{close && (
				<button type='button' className={cn(ButtonStyle({ color }))} onClick={onClick}>
					<XMarkIcon className={cn(RightImageStyle({ color, size }))} />
				</button>
			)}
		</div>
	);
};

export default memo(
	Badge,
	(prev: BadgeProps, next: BadgeProps) =>
		prev.color === next.color &&
		prev.size === next.size &&
		prev.leftIcon === next.leftIcon &&
		prev.close === next.close &&
		prev.label === next.label &&
		prev.className === next.className &&
		prev.onClick === next.onClick
);
