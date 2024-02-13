'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { cn } from '../../utils/style';
import { ArrowStyle, MenuStyle, SubMenuStyle } from './style';
import { AccordionMenuType, AccordionType } from '../../types/accordion';

interface AccordionProps {
	list: AccordionType[];
	path: string;
	className?: string;
	onPush: (path: string) => void;
}

const Accordion = ({ list, path, className, onPush }: AccordionProps) => {
	const [expandedMenuIndex, setExpandedMenuIndex] = useState(
		list.findIndex((item) => !!item.subMenus?.filter((subMenu) => path.includes(subMenu.path)).length)
	);

	const getIsCurrentPath = (path: string, currentPath: string) => {
		return !!path && currentPath.includes(path);
	};

	const getIsExpandedMenu = (index: number, expandedMenuIndex: number) => {
		return index === expandedMenuIndex;
	};

	const handleMenuClick = (index: number, expandedMenuIndex: number, path: string, subMenu?: AccordionMenuType[]) => {
		if (path) onPush(path);
		if (!!subMenu) setExpandedMenuIndex(index !== expandedMenuIndex ? index : -1);
		else setExpandedMenuIndex(index);
	};

	return (
		<div className={`text-base font-semibold flex flex-col gap-3 ${className}`}>
			{list.map((item) => (
				<div key={item.index}>
					<div
						className={cn(MenuStyle({ isCurrentPath: getIsCurrentPath(item.menu.path, path) }))}
						onClick={() => handleMenuClick(item.index, expandedMenuIndex, item.menu.path, item.subMenus)}
					>
						<img
							src={item[getIsCurrentPath(item.menu.path, path) ? 'activeIcon' : 'icon']}
							alt={item.icon}
							className='w-6 h-6'
						/>
						<span>{item.menu.label}</span>
						{!!item.subMenus && (
							<ChevronDownIcon
								className={cn(ArrowStyle({ isExpanded: getIsExpandedMenu(item.index, expandedMenuIndex) }))}
							/>
						)}
					</div>
					{!!item.subMenus && getIsExpandedMenu(item.index, expandedMenuIndex) && (
						<div className='flex flex-col gap-1 overflow-hidden'>
							{item.subMenus.map((subItem, index) => (
								<div
									key={index}
									className={cn(SubMenuStyle({ isCurrentPath: getIsCurrentPath(subItem.path, path) }))}
									onClick={() => onPush(subItem.path)}
								>
									{subItem.label}
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Accordion;
