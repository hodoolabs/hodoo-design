'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { memo, useState } from 'react';
import { cn } from '../../utils/style';
import { ArrowStyle, LabelStyle, MenuStyle, SubMenuStyle, SubMenusStyle } from './style';
import { styled } from 'styled-components';
const Accordion = ({ list, pathname, className, onPush }) => {
    const [expandedMenuIndex, setExpanededMenuIndex] = useState(0);
    const handleMenuClick = (index, expandedMenuIndex, path) => {
        if (path)
            onPush(path);
        setExpanededMenuIndex(index !== expandedMenuIndex ? index : 0);
    };
    const handleCheckCurrentPath = (path, currentPath) => {
        return !!path && currentPath.includes(path);
    };
    const handleCheckExpandedMenu = (index, expandedMenuIndex, subMenus, currentpath) => {
        return index === expandedMenuIndex || !!subMenus.filter((subMenu) => subMenu.path === currentpath).length;
    };
    return (_jsx(AccordionStyled, { className: `text-base font-semibold ${className}`, children: list.map((item) => (_jsxs("div", { className: 'mb-3', children: [_jsxs("div", { className: cn(MenuStyle({ isCurrentPath: handleCheckCurrentPath(item.menu.path, pathname) })), onClick: () => handleMenuClick(item.index, expandedMenuIndex, item.menu.path), children: [_jsx("img", { src: handleCheckCurrentPath(item.menu.path, pathname) ? `${item.activeIcon}` : `${item.icon}`, alt: item.icon, className: 'w-6 h-6' }), _jsx("span", { className: cn(LabelStyle({ isCurrentPath: handleCheckCurrentPath(item.menu.path, pathname) })), children: item.menu.label }), !!item.subMenus.length && (_jsx(ChevronDownIcon, { className: cn(ArrowStyle({
                                isExpanded: handleCheckExpandedMenu(item.index, expandedMenuIndex, item.subMenus, pathname),
                            })) }))] }), !!item.subMenus.length && (_jsx("div", { className: cn(SubMenusStyle({
                        isExpanded: handleCheckExpandedMenu(item.index, expandedMenuIndex, item.subMenus, pathname),
                        height: item.subMenus.length,
                    })), children: item.subMenus.map((subItem, index) => (_jsx("div", { className: cn(SubMenuStyle({ isCurrentPath: handleCheckCurrentPath(subItem.path, pathname) })), onClick: () => onPush(subItem.path), children: subItem.label }, index))) }))] }, item.index))) }));
};
export default memo(Accordion, (prev, next) => prev.list === next.list &&
    prev.pathname === next.pathname &&
    prev.className === next.className &&
    prev.onPush === next.onPush);
const AccordionStyled = styled.div `
	.transition-300 {
		transition: 0.3s;
	}
`;
