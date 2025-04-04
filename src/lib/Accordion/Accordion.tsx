'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { CSSProperties, useState } from 'react';
import { AccordionMenuType, AccordionType } from '../../types/accordion';
import { cn } from '../../utils/style';
import { ArrowStyle, MenuStyle, SubMenuStyle } from './style';

interface AccordionProps {
	list: AccordionType[];
	path: string;
	className?: string;
	menuItem?: {
		bgColor?: string;
		textColor?: string;
		hoverColor?: string;
	};
	onPush: (path: string) => void;
}

const Accordion = ({ list, path, className, menuItem, onPush }: AccordionProps) => {
	const [expandedMenuIndex, setExpandedMenuIndex] = useState(
		list.findIndex((item) => !!item.subMenus?.filter((subMenu) => path.includes(subMenu.path)).length)
	);

	const getMenuItemStyle = (isCurrentPath: boolean) => {
		let menuItemStyle: CSSProperties = {};
		if (isCurrentPath) {
			if (menuItem?.bgColor) menuItemStyle.backgroundColor = menuItem.bgColor;
			if (menuItem?.textColor) menuItemStyle.color = menuItem.textColor;
		}
		return menuItemStyle;
	};

	const getMenuItemClass = () => {
		return cn('hover-effect', menuItem?.hoverColor && `hover:!bg-[${menuItem.hoverColor}]`);
	};

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
			{list.map((item) => {
				const isExpanded = getIsExpandedMenu(item.index, expandedMenuIndex);
				return (
					<div key={item.index}>
						<div
							style={getMenuItemStyle(getIsCurrentPath(item.menu.path, path))}
							className={cn(MenuStyle({ isCurrentPath: getIsCurrentPath(item.menu.path, path) }), getMenuItemClass())}
							onClick={() => handleMenuClick(item.index, expandedMenuIndex, item.menu.path, item.subMenus)}
						>
							<img
								src={item[getIsCurrentPath(item.menu.path, path) ? 'activeIcon' : 'icon']}
								alt={item.icon}
								className='w-6 h-6'
							/>
							<span>{item.menu.label}</span>
							{!!item.subMenus && <ChevronDownIcon className={cn(ArrowStyle({ isExpanded }))} />}
						</div>
						{!!item.subMenus && (
							<div
								className='flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out'
								style={{
									height: isExpanded ? `${item.subMenus?.length * 48}px` : '0px',
									opacity: isExpanded ? 1 : 0,
								}}
							>
								{item.subMenus?.map((subItem, index) => (
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
				);
			})}
		</div>
	);
};

export default Accordion;
