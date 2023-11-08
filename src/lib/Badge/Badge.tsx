'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';
import { cn } from '../../utils/style';
import { BadgeStyle, ButtonStyle, LeftImageStyle, RightImageStyle } from './style';

interface BadgeProps {
	color?: 'blue' | 'gray' | 'gray_low' | 'red';
	size?: 'lg' | 'md' | 'sm';
	leftIcon?: ReactNode;
	label?: string;
	className?: string;
	onClick?: () => void;
}

const Badge = ({ color = 'blue', size = 'sm', leftIcon, label, className, onClick }: BadgeProps) => {
	const iconOnly = !label ? size : null;

	return (
		<div className={`${cn(BadgeStyle({ color, size, iconOnly }))} ${className}`}>
			{leftIcon && <div className={cn(LeftImageStyle({ size, iconOnly }))}>{leftIcon}</div>}
			{label && <span>{label}</span>}
			{onClick && (
				<button type='button' className={cn(ButtonStyle({ color }))} onClick={onClick}>
					<XMarkIcon className={cn(RightImageStyle({ size }))} />
				</button>
			)}
		</div>
	);
};

export default Badge;
