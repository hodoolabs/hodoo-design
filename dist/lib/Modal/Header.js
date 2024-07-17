'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowSmallLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '../../utils/style';
import Button from '../Button/Button';
import { SubTitleStyle, TitleStyle } from './style';
const Header = ({ modalState, modalHistory, goBackModal, closeModal }) => {
    const { title, subTitle, size, isXButton = true } = modalState;
    return (_jsxs("div", { className: 'flex flex-col bg-white rounded-t-3xl', children: [_jsxs("div", { className: cn(TitleStyle({ size })), children: [_jsx("div", { className: 'w-8 h-8', children: modalHistory && modalHistory.length > 1 && goBackModal && (_jsx(Button, { color: 'white', size: 'base', leftIcon: _jsx(ArrowSmallLeftIcon, { className: 'text-gray-500 group-hover:text-gray-700' }), onClick: goBackModal })) }), _jsx("div", { className: 'flex items-center justify-center text-xl font-semibold text-center text-gray-900 whitespace-pre-wrap grow', children: title }), isXButton && (_jsx(Button, { color: 'white', size: 'base', leftIcon: _jsx(XMarkIcon, { className: 'text-gray-500 group-hover:text-gray-700' }), onClick: closeModal }))] }), subTitle && (_jsx("div", { className: cn(SubTitleStyle({ size })), children: _jsx("div", { className: 'text-base font-medium leading-relaxed text-center text-gray-500 whitespace-pre-line', children: subTitle }) }))] }));
};
export default Header;
