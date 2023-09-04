'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { XMarkIcon } from '@heroicons/react/24/outline';
import useSetTimeout from '../../hooks/useSetTimeout';
import useToast from '../../stores/useToast';
import { cn } from '../../utils/style';
import { ToastStyle } from './style';
import ToastQuestionSvg from './ToastQuestionSvg';
import ToastSuccessSvg from './ToastSuccessSvg';
import ToastWarningSvg from './ToastWarningSvg';
var Toast = function () {
    var _a = useToast(), toastState = _a.toastState, closeToast = _a.closeToast;
    var toastingTime = toastState.toastingTime, title = toastState.title, description = toastState.description, leftButton = toastState.leftButton, rightButton = toastState.rightButton, position = toastState.position, leftIcon = toastState.leftIcon, isClose = toastState.isClose;
    useSetTimeout(toastingTime, closeToast);
    return (_jsxs("div", { className: cn(ToastStyle({ position: position })), children: [_jsxs("div", { className: 'flex gap-3', children: [leftIcon === 'question'
                        ? ToastQuestionSvg()
                        : leftIcon === 'success'
                            ? ToastSuccessSvg()
                            : leftIcon === 'warning'
                                ? ToastWarningSvg()
                                : '', _jsxs("div", { className: 'flex flex-col grow', children: [_jsx("div", { className: 'flex items-center text-[15px] font-medium text-white mt-1', children: title }), description && _jsx("div", { className: 'mt-2 text-sm font-medium leading-5 text-gray-400', children: description })] }), isClose && (_jsx("button", { className: 'flex items-center justify-center flex-none w-8 h-8 rounded-lg cursor-pointer hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300', onClick: closeToast, children: _jsx(XMarkIcon, { className: 'w-6 h-6 text-gray-400' }) }))] }), (leftButton === null || leftButton === void 0 ? void 0 : leftButton.text) ||
                ((rightButton === null || rightButton === void 0 ? void 0 : rightButton.text) && (_jsxs("div", { className: 'flex justify-center gap-2 mt-3 w-[200px] ml-auto mr-auto', children: [(leftButton === null || leftButton === void 0 ? void 0 : leftButton.text) && (_jsx("button", { onClick: leftButton === null || leftButton === void 0 ? void 0 : leftButton.onClick, className: 'px-4 py-2 text-xs font-semibold text-gray-200 bg-gray-700 rounded-lg grow hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900', children: leftButton === null || leftButton === void 0 ? void 0 : leftButton.text })), (rightButton === null || rightButton === void 0 ? void 0 : rightButton.text) && (_jsx("button", { onClick: rightButton === null || rightButton === void 0 ? void 0 : rightButton.onClick, className: 'px-4 py-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-lg grow hover:bg-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900', children: rightButton === null || rightButton === void 0 ? void 0 : rightButton.text }))] })))] }));
};
export default Toast;
