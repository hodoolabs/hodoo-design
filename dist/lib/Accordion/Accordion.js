'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { memo, useState } from 'react';
import { cn } from '../../utils/style';
import { ArrowStyle, MenuStyle, SubMenuStyle, SubMenusStyle } from './style';
const Accordion = ({ list, path, className, onPush }) => {
    const [expandedMenuIndex, setExpanededMenuIndex] = useState(0);
    const handleMenuClick = (index, expandedMenuIndex, path, subMenusLength) => {
        if (path)
            onPush(path);
        if (subMenusLength)
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
    return (_jsx("div", { className: `text-base font-semibold flex flex-col gap-3 ${className}`, children: list.map((item) => (_jsxs("div", { children: [_jsxs("div", { className: cn(MenuStyle({ isCurrentPath: getIsCurrentPath(item.menu.path, path) })), onClick: () => handleMenuClick(item.index, expandedMenuIndex, item.menu.path, item.subMenus.length), children: [_jsx("img", { src: item[getIsCurrentPath(item.menu.path, path) ? 'activeIcon' : 'icon'], alt: item.icon, className: 'w-6 h-6' }), _jsx("span", { children: item.menu.label }), !!item.subMenus.length && (_jsx(ChevronDownIcon, { className: cn(ArrowStyle({ isExpanded: getIsExpandedMenu(item.index, expandedMenuIndex, path, item.subMenus) })) }))] }), !!item.subMenus.length && (_jsx("div", { className: cn(SubMenusStyle({
                        isExpanded: getIsExpandedMenu(item.index, expandedMenuIndex, path, item.subMenus),
                        height: item.subMenus.length,
                    })), children: item.subMenus.map((subItem) => (_jsx("div", { className: cn(SubMenuStyle({ isCurrentPath: getIsCurrentPath(subItem.path, path) })), onClick: () => onPush(subItem.path), children: subItem.label }, subItem.path))) }))] }, item.index))) }));
};
export default memo(Accordion, (prev, next) => prev.list === next.list &&
    prev.path === next.path &&
    prev.className === next.className &&
    prev.onPush === next.onPush);
