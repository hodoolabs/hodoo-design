'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { AccordionType } from '../../types/accordion';
import { cn } from '../../utils/style';
import { ArrowStyle, MenuStyle, SubMenuStyle, SubMenusStyle } from './style';

interface AccordionProps {
	list: AccordionType[];
	path: string;
	className?: string;
	onPush: (path: string) => void;
}

const Accordion = ({ list, path, className, onPush }: AccordionProps) => {
	const [expandedMenuIndex, setExpanededMenuIndex] = useState(0);

	const handleMenuClick = (index: number, expandedMenuIndex: number, path: string, subMenusLength: number) => {
		if (path) onPush(path);
		if (subMenusLength) setExpanededMenuIndex(index !== expandedMenuIndex ? index : -1);
		else setExpanededMenuIndex(index);
	};

	const getIsCurrentPath = (path: string, currentPath: string) => {
		return !!path && currentPath.includes(path);
	};

	const getIsExpandedMenu = (
		index: number,
		expandedMenuIndex: number,
		currentpath: string,
		subMenus: {
			path: string;
			label: string;
		}[]
	) => {
		return index === expandedMenuIndex || !!subMenus.filter((subMenu) => subMenu.path === currentpath).length;
	};

	return (
		<div className={`text-base font-semibold flex flex-col gap-3 ${className}`}>
			{list.map((item, index) => (
				<div key={index}>
					<div
						className={cn(MenuStyle({ isCurrentPath: getIsCurrentPath(item.menu.path, path) }))}
						onClick={() => handleMenuClick(item.index, expandedMenuIndex, item.menu.path, item.subMenus.length)}
					>
						<img
							src={item[getIsCurrentPath(item.menu.path, path) ? 'activeIcon' : 'icon']}
							alt={item.icon}
							className='w-6 h-6'
						/>
						<span>{item.menu.label}</span>
						{!!item.subMenus.length && (
							<ChevronDownIcon
								className={cn(
									ArrowStyle({ isExpanded: getIsExpandedMenu(item.index, expandedMenuIndex, path, item.subMenus) })
								)}
							/>
						)}
					</div>
					{!!item.subMenus.length && (
						<div
							className={cn(
								SubMenusStyle({
									isExpanded: getIsExpandedMenu(item.index, expandedMenuIndex, path, item.subMenus),
									height: item.subMenus.length,
								})
							)}
						>
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
