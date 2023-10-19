'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { ReactNode, memo } from 'react';
import { cn } from '../../utils/style';
import { BadgeStyle, ButtonStyle, LeftImageStyle, RightImageStyle } from './style';

interface BadgeProps {
	color: 'blue' | 'gray' | 'gray_low' | 'red';
	size: 'lg' | 'md' | 'sm';
	leftIcon?: ReactNode;
	label?: string;
	className?: string;
	onClick?: () => void;
}

const Badge = ({ color, size, leftIcon, label, className, onClick }: BadgeProps) => {
	return (
		<div className={`${cn(BadgeStyle({ color, size, iconOnly: !label ? size : null }))} ${className}`}>
			{leftIcon && <div className={cn(LeftImageStyle({ size, iconOnly: !label ? size : null }))}>{leftIcon}</div>}
			{label && <span>{label}</span>}
			{onClick && (
				<button type='button' className={cn(ButtonStyle({ color }))} onClick={onClick}>
					<XMarkIcon className={cn(RightImageStyle({ size }))} />
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
		prev.label === next.label &&
		prev.className === next.className &&
		prev.onClick === next.onClick
);
