'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { memo, useState } from 'react';
import { MenuListType } from '../../types/accordion';
import { cn } from '../../utils/style';
import { ArrowStyle, LabelStyle, MenuStyle, SubMenuStyle, SubMenusStyle } from './style';
import { styled } from 'styled-components';

interface AccordionProps {
	list: MenuListType[];
	pathname: string;
	className?: string;
	onPush: (pathname: string) => void;
}

const Accordion = ({ list, pathname, className, onPush }: AccordionProps) => {
	const [expandedMenuIndex, setExpanededMenuIndex] = useState(0);

	const handleMenuClick = (index: number, expandedMenuIndex: number, path: string) => {
		if (path) onPush(path);
		setExpanededMenuIndex(index !== expandedMenuIndex ? index : 0);
	};

	const handleCheckCurrentPath = (path: string, currentPath: string) => {
		return !!path && currentPath.includes(path);
	};

	const handleCheckExpandedMenu = (
		index: number,
		expandedMenuIndex: number,
		subMenus: {
			path: string;
			label: string;
		}[],
		currentpath: string
	) => {
		return index === expandedMenuIndex || !!subMenus.filter((subMenu) => subMenu.path === currentpath).length;
	};

	return (
		<AccordionStyled className={`text-base font-semibold ${className}`}>
			{list.map((item) => (
				<div key={item.index} className='mb-3'>
					<div
						className={cn(MenuStyle({ isCurrentPath: handleCheckCurrentPath(item.menu.path, pathname) }))}
						onClick={() => handleMenuClick(item.index, expandedMenuIndex, item.menu.path)}
					>
						<img
							src={handleCheckCurrentPath(item.menu.path, pathname) ? `${item.activeIcon}` : `${item.icon}`}
							alt={item.icon}
							className='w-6 h-6'
						/>
						<span className={cn(LabelStyle({ isCurrentPath: handleCheckCurrentPath(item.menu.path, pathname) }))}>
							{item.menu.label}
						</span>
						{!!item.subMenus.length && (
							<ChevronDownIcon
								className={cn(
									ArrowStyle({
										isExpanded: handleCheckExpandedMenu(item.index, expandedMenuIndex, item.subMenus, pathname),
									})
								)}
							/>
						)}
					</div>
					{!!item.subMenus.length && (
						<div
							className={cn(
								SubMenusStyle({
									isExpanded: handleCheckExpandedMenu(item.index, expandedMenuIndex, item.subMenus, pathname),
									height: item.subMenus.length,
								})
							)}
						>
							{item.subMenus.map((subItem, index) => (
								<div
									key={index}
									className={cn(SubMenuStyle({ isCurrentPath: handleCheckCurrentPath(subItem.path, pathname) }))}
									onClick={() => onPush(subItem.path)}
								>
									{subItem.label}
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</AccordionStyled>
	);
};

export default memo(
	Accordion,
	(prev: AccordionProps, next: AccordionProps) =>
		prev.list === next.list &&
		prev.pathname === next.pathname &&
		prev.className === next.className &&
		prev.onPush === next.onPush
);

const AccordionStyled = styled.div`
	.transition-300 {
		transition: 0.3s;
	}
`;
