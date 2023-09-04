'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowSmallLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import useModal from '../../stores/useModal';
import Button from '../Button/Button';
var Header = function () {
    var _a = useModal(), modalState = _a.modalState, modalHistory = _a.modalHistory, goBackModal = _a.goBackModal, closeModal = _a.closeModal;
    return (_jsxs("div", { className: 'flex flex-col bg-white rounded-t-3xl', children: [_jsxs("div", { className: 'flex px-8 pt-8 pb-5', children: [_jsx("div", { className: 'w-8 h-8', children: modalHistory.length > 1 && (_jsx(Button, { color: 'white', size: 'base', leftIcon: _jsx(ArrowSmallLeftIcon, { className: 'text-gray-500 group-hover:text-gray-700' }), onClick: goBackModal })) }), _jsx("div", { className: 'flex items-center justify-center text-xl font-semibold text-center text-gray-900 grow', children: modalState.title }), _jsx(Button, { color: 'white', size: 'base', leftIcon: _jsx(XMarkIcon, { className: 'text-gray-500 group-hover:text-gray-700' }), onClick: closeModal })] }), modalState.subTitle && (_jsx("div", { className: 'px-8 pb-6', children: _jsx("div", { className: 'text-base font-medium leading-relaxed text-center text-gray-500', children: modalState.subTitle }) }))] }));
};
export default Header;
