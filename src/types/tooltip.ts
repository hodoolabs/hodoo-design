import { ReactNode } from 'react';

type TooltipType = {
	color?: 'dark' | 'white';
	title: string;
	description?: ReactNode;
	isShowArrow?: boolean;
	children: ReactNode;
	position?: 'top' | 'right' | 'left' | 'bottom';
	className?: string;
};

export type { TooltipType };
