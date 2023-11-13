'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { cn } from '../../utils/style';
import { ArrowStyle, MenuStyle, SubMenuStyle, SubMenusStyle } from './style';
const Accordion = ({ list, path, className, onPush }) => {
    const [expandedMenuIndex, setExpanededMenuIndex] = useState(0);
    const handleMenuClick = (index, expandedMenuIndex, path, subMenu) => {
        if (path)
            onPush(path);
        if (!!subMenu)
            setExpanededMenuIndex(index !== expandedMenuIndex ? index : -1);
        else
            setExpanededMenuIndex(index);
    };
    const getIsCurrentPath = (path, currentPath) => {
        return !!path && currentPath.includes(path);
    };
    const getIsExpandedMenu = (index, expandedMenuIndex, currentpath, subMenus) => {
        return index === expandedMenuIndex || !!subMenus.filter((subMenu) => subMenu.path === currentpath).length;
    };
    return (_jsx("div", { className: `text-base font-semibold flex flex-col gap-3 ${className}`, children: list.map((item, index) => (_jsxs("div", { children: [_jsxs("div", { className: cn(MenuStyle({ isCurrentPath: getIsCurrentPath(item.menu.path, path) })), onClick: () => handleMenuClick(item.index, expandedMenuIndex, item.menu.path, item.subMenus), children: [_jsx("img", { src: item[getIsCurrentPath(item.menu.path, path) ? 'activeIcon' : 'icon'], alt: item.icon, className: 'w-6 h-6' }), _jsx("span", { children: item.menu.label }), !!item.subMenus && (_jsx(ChevronDownIcon, { className: cn(ArrowStyle({ isExpanded: getIsExpandedMenu(item.index, expandedMenuIndex, path, item.subMenus) })) }))] }), !!item.subMenus && (_jsx("div", { className: cn(SubMenusStyle({
                        isExpanded: getIsExpandedMenu(item.index, expandedMenuIndex, path, item.subMenus),
                        height: item.subMenus.length,
                    })), children: item.subMenus.map((subItem, index) => (_jsx("div", { className: cn(SubMenuStyle({ isCurrentPath: getIsCurrentPath(subItem.path, path) })), onClick: () => onPush(subItem.path), children: subItem.label }, index))) }))] }, index))) }));
};
export default Accordion;
