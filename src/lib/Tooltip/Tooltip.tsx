'use client';

import throttle from 'lodash/throttle';
import { RefObject, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { cn } from '../../utils/style';
import VectorDarkSvg from './images/VectorDarkSvg';
import VectorWhiteSVG from './images/VectorWhiteSvg';
import { ArrowStyle, DescriptionStyle, TooltipStyle, WrapStyle } from './style';
import { TooltipType } from '../../types/tooltip';

const Tooltip = ({
	color = 'dark',
	title,
	description,
	isShowArrow = true,
	children,
	position = 'top',
	className,
	zIndex,
}: TooltipType) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const [element, setElement] = useState<Element | DocumentFragment>();
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	const handleSetPosition = (ref: RefObject<HTMLDivElement>) => {
		if (!ref.current) return;

		const target = ref.current.getBoundingClientRect();
		const gap = 12;

		if (position === 'top') {
			setTop(target.top - gap);
			setLeft(target.left + target.width / 2);
		}

		if (position === 'left') {
			setTop(target.top + target.height / 2);
			setLeft(target.left - gap);
		}

		if (position === 'right') {
			setTop(target.top + target.height / 2);
			setLeft(target.right + gap);
		}

		if (position === 'bottom') {
			setTop(target.bottom + gap);
			setLeft(target.left + target.width / 2);
		}
	};

	useEffect(() => {
		const div = document.createElement('div');
		document.body.appendChild(div);
		setElement(div);

		return () => {
			document.body.removeChild(div);
		};
	}, []);

	useEffect(() => {
		const tooltip = document.getElementById('tooltip');
		const table = document.getElementById('table');

		const handleSetTooltip = throttle(() => {
			handleSetPosition(ref);
		}, 500);

		const handleHideTooltip = throttle(() => {
			setIsHovered(false);
		}, 500);

		tooltip?.addEventListener('scroll', handleHideTooltip);
		table?.addEventListener('scroll', handleHideTooltip);
		global.window.addEventListener('scroll', handleHideTooltip);
		global.window.addEventListener('click', handleHideTooltip);
		global.window.addEventListener('mouseover', handleSetTooltip);

		return () => {
			tooltip?.removeEventListener('scroll', handleHideTooltip);
			table?.removeEventListener('scroll', handleHideTooltip);
			global.window.removeEventListener('scroll', handleHideTooltip);
			global.window.removeEventListener('click', handleHideTooltip);
			global.window.removeEventListener('mouseover', handleSetTooltip);
		};
	}, [ref]);

	return (
		<div
			className={`relative inline-block ${className}`}
			ref={ref}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className='cursor-pointer'>{children}</div>
			{isHovered &&
				element &&
				ReactDOM.createPortal(
					<div className={cn(TooltipStyle({ position }))} style={{ top, left, zIndex }}>
						<div className={`${cn(WrapStyle({ color }))}`}>
							<div className='text-center whitespace-pre-line'>{title}</div>
							<div className={cn(DescriptionStyle({ color }))}>{description}</div>
							{isShowArrow && (
								<div className={cn(ArrowStyle({ position }))}>
									{color === 'white' ? <VectorWhiteSVG /> : <VectorDarkSvg />}
								</div>
							)}
						</div>
					</div>,
					element
				)}
		</div>
	);
};

export default Tooltip;
