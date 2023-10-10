'use client';

import { memo, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { TooltipType } from '../../types/tooltip';
import { cn } from '../../utils/style';
import VectorDarkSvg from './images/VectorDarkSvg';
import VectorWhiteSVG from './images/VectorWhiteSvg';
import { ArrowStyle, DescriptionStyle, TooltipBoxStyle, TooltipStyle } from './style';
import { throttle } from 'lodash';

const Tooltip = ({
	color = 'dark',
	title,
	description,
	isShowArrow = true,
	children,
	position = 'top',
	className,
}: TooltipType) => {
	const [isHovered, setIsHovered] = useState(false);
	const [tooltipElement, setTooltipElement] = useState<HTMLDivElement | null>(null);
	const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
	const targetRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = document.createElement('div');
		document.body.appendChild(element);
		setTooltipElement(element);

		return () => {
			document.body.removeChild(element);
		};
	}, []);

	useEffect(() => {
		if (isHovered && targetRef.current) {
			const targetRect = targetRef.current.getBoundingClientRect();

			setTooltipPosition({
				top: targetRect.top + window.scrollY - (targetRect.height * 2) / 3,
				left: targetRect.left + window.scrollX + targetRect.width / 2,
			});
		}
	}, [isHovered]);

	useEffect(() => {
		const hideTooltipOnScroll = throttle(() => {
			setIsHovered(false);
		}, 200);

		window.addEventListener('scroll', hideTooltipOnScroll);
		window.addEventListener('touchmove', hideTooltipOnScroll);

		return () => {
			window.removeEventListener('scroll', hideTooltipOnScroll);
			window.removeEventListener('touchmove', hideTooltipOnScroll);

			hideTooltipOnScroll.cancel();
		};
	}, []);

	return (
		<div
			className={`relative inline-block ${className}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			ref={targetRef}
		>
			<div>{children}</div>
			{isHovered &&
				tooltipElement &&
				ReactDOM.createPortal(
					<div
						className={cn(TooltipBoxStyle({ position, isShowArrow: isShowArrow ? position : null }))}
						style={{ top: `${tooltipPosition.top}px`, left: `${tooltipPosition.left}px` }}
					>
						<div className={`${cn(TooltipStyle({ color }))}`}>
							<div>{title}</div>
							<div className={cn(DescriptionStyle({ color }))}>{description}</div>
							{isShowArrow && (
								<div className={cn(ArrowStyle({ position }))}>
									{color === 'white' ? <VectorWhiteSVG /> : <VectorDarkSvg />}
								</div>
							)}
						</div>
					</div>,
					tooltipElement
				)}
		</div>
	);
};

export default memo(
	Tooltip,
	(prev: TooltipType, next: TooltipType) =>
		prev.color === next.color &&
		prev.title === next.title &&
		prev.description === next.description &&
		prev.isShowArrow === next.isShowArrow &&
		prev.children === next.children &&
		prev.position === next.position &&
		prev.className === next.className
);
