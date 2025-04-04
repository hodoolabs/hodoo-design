'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { cn } from '../../utils/style';
import { ArrowStyle, MenuStyle, SubMenuStyle } from './style';
const Accordion = ({ list, path, className, menuItem, onPush }) => {
    const [expandedMenuIndex, setExpandedMenuIndex] = useState(list.findIndex((item) => { var _a; return !!((_a = item.subMenus) === null || _a === void 0 ? void 0 : _a.filter((subMenu) => path.includes(subMenu.path)).length); }));
    const getMenuItemStyle = (isCurrentPath) => {
        let menuItemStyle = {};
        if (isCurrentPath) {
            if (menuItem === null || menuItem === void 0 ? void 0 : menuItem.bgColor)
                menuItemStyle.backgroundColor = menuItem.bgColor;
            if (menuItem === null || menuItem === void 0 ? void 0 : menuItem.textColor)
                menuItemStyle.color = menuItem.textColor;
        }
        return menuItemStyle;
    };
    const getMenuItemClass = () => {
        return cn('hover-effect', (menuItem === null || menuItem === void 0 ? void 0 : menuItem.hoverColor) && `hover:!bg-[${menuItem.hoverColor}]`);
    };
    const getIsCurrentPath = (path, currentPath) => {
        return !!path && currentPath.includes(path);
    };
    const getIsExpandedMenu = (index, expandedMenuIndex) => {
        return index === expandedMenuIndex;
    };
    const handleMenuClick = (index, expandedMenuIndex, path, subMenu) => {
        if (path)
            onPush(path);
        if (!!subMenu)
            setExpandedMenuIndex(index !== expandedMenuIndex ? index : -1);
        else
            setExpandedMenuIndex(index);
    };
    return (_jsx("div", { className: `text-base font-semibold flex flex-col gap-3 ${className}`, children: list.map((item) => {
            var _a, _b;
            const isExpanded = getIsExpandedMenu(item.index, expandedMenuIndex);
            return (_jsxs("div", { children: [_jsxs("div", { style: getMenuItemStyle(getIsCurrentPath(item.menu.path, path)), className: cn(MenuStyle({ isCurrentPath: getIsCurrentPath(item.menu.path, path) }), getMenuItemClass()), onClick: () => handleMenuClick(item.index, expandedMenuIndex, item.menu.path, item.subMenus), children: [_jsx("img", { src: item[getIsCurrentPath(item.menu.path, path) ? 'activeIcon' : 'icon'], alt: item.icon, className: 'w-6 h-6' }), _jsx("span", { children: item.menu.label }), !!item.subMenus && _jsx(ChevronDownIcon, { className: cn(ArrowStyle({ isExpanded })) })] }), !!item.subMenus && (_jsx("div", { className: 'flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out', style: {
                            height: isExpanded ? `${((_a = item.subMenus) === null || _a === void 0 ? void 0 : _a.length) * 48}px` : '0px',
                            opacity: isExpanded ? 1 : 0,
                        }, children: (_b = item.subMenus) === null || _b === void 0 ? void 0 : _b.map((subItem, index) => (_jsx("div", { className: cn(SubMenuStyle({ isCurrentPath: getIsCurrentPath(subItem.path, path) })), onClick: () => onPush(subItem.path), children: subItem.label }, index))) }))] }, item.index));
        }) }));
};
export default Accordion;
