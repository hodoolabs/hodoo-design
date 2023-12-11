'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { cn } from '../../utils/style';
import ToastQuestionSvg from './images/ToastQuestionSvg';
import ToastSuccessSvg from './images/ToastSuccessSvg';
import ToastWarningSvg from './images/ToastWarningSvg';
import { ToastStyle } from './style';
const Toast = ({ toastState, closeToast }) => {
    const { toastingTime, title, description, leftButton, rightButton, position, leftIcon, closeButton, isOpen } = toastState;
    useEffect(() => {
        if (!toastingTime)
            return;
        const timer = setTimeout(() => closeToast(), toastingTime);
        return () => clearTimeout(timer);
    }, [toastingTime, title]);
    return (_jsxs("div", { className: cn(ToastStyle({ isOpen, position })), children: [_jsxs("div", { className: 'flex gap-3', children: [_jsx("div", { className: 'w-8 h-8 rounded-lg', children: leftIcon === 'question' ? (_jsx(ToastQuestionSvg, {})) : leftIcon === 'success' ? (_jsx(ToastSuccessSvg, {})) : (leftIcon === 'warning' && _jsx(ToastWarningSvg, {})) }), _jsxs("div", { className: 'flex flex-col grow', children: [_jsx("div", { className: 'flex items-center text-[15px] leading-normal text-start font-medium text-white mt-1', children: title }), description && _jsx("div", { className: 'mt-2 text-sm font-medium text-gray-400', children: description })] }), closeButton && (_jsx("button", { className: 'flex items-center justify-center flex-none w-8 h-8 rounded-lg cursor-pointer hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300', onClick: closeToast, children: _jsx(XMarkIcon, { className: 'w-6 h-6 text-gray-400' }) }))] }), ((leftButton === null || leftButton === void 0 ? void 0 : leftButton.text) || (rightButton === null || rightButton === void 0 ? void 0 : rightButton.text)) && (_jsxs("div", { className: 'flex justify-center gap-2 mt-3 w-[200px] ml-auto mr-auto', children: [(leftButton === null || leftButton === void 0 ? void 0 : leftButton.text) && (_jsx("button", { onClick: leftButton === null || leftButton === void 0 ? void 0 : leftButton.onClick, className: 'px-4 py-2 text-xs font-semibold text-gray-200 bg-gray-700 rounded-lg grow hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900', children: leftButton === null || leftButton === void 0 ? void 0 : leftButton.text })), (rightButton === null || rightButton === void 0 ? void 0 : rightButton.text) && (_jsx("button", { onClick: rightButton === null || rightButton === void 0 ? void 0 : rightButton.onClick, className: 'px-4 py-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-lg grow hover:bg-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900', children: rightButton === null || rightButton === void 0 ? void 0 : rightButton.text }))] }))] }));
};
export default Toast;
