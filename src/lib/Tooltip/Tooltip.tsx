'use client';

import { ReactNode, memo } from 'react';
import { cn } from '../../utils/style';
import VectorDarkSvg from './images/VectorDarkSvg';
import VectorWhiteSVG from './images/VectorWhiteSvg';
import { ArrowStyle, DescriptionStyle, TooltipBoxStyle, TooltipStyle } from './style';

interface TooltipProps {
	color: 'dark' | 'white';
	title: string;
	description?: ReactNode;
	isShowArrow: boolean;
	children: ReactNode;
	position: 'top' | 'right' | 'left' | 'bottom';
}

const Tooltip = ({ color, title, description, isShowArrow, children, position }: TooltipProps) => {
	return (
		<div className='relative inline-block'>
			<div className='peer'>{children}</div>
			<div className={cn(TooltipBoxStyle({ position, isShowArrow: isShowArrow ? position : null }))}>
				<div className={`${cn(TooltipStyle({ color }))}`}>
					<p>{title}</p>
					<div className={cn(DescriptionStyle({ color }))}>{description}</div>
					{isShowArrow && (
						<div className={cn(ArrowStyle({ position }))}>
							{color === 'white' ? <VectorWhiteSVG /> : <VectorDarkSvg />}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default memo(
	Tooltip,
	(prev: TooltipProps, next: TooltipProps) =>
		prev.color === next.color &&
		prev.title === next.title &&
		prev.description === next.description &&
		prev.isShowArrow === next.isShowArrow &&
		prev.children === next.children &&
		prev.position === next.position
);
