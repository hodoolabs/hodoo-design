import { ReactNode } from 'react';

type TooltipType = {
	color?: 'dark' | 'white';
	title: ReactNode;
	description?: ReactNode;
	isShowArrow?: boolean;
	children?: ReactNode;
	position?: 'top' | 'right' | 'left' | 'bottom';
	className?: string;
};

export type { TooltipType };
