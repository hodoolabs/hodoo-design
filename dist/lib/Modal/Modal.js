'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useModal from '../../stores/useModal';
import { cn } from '../../utils/style';
import Header from './Header';
import { ModalStyle } from './style';
const Modal = () => {
    const { modalState, closeModal } = useModal();
    return (_jsxs("div", { className: 'fixed top-0 left-0 z-30 flex items-center justify-center w-full h-screen', children: [_jsxs("div", { className: cn(ModalStyle({ size: modalState.size })), children: [_jsx(Header, {}), _jsx("div", { className: 'px-6 pb-6 bg-white rounded-b-3xl', children: modalState.content })] }), _jsx("div", { className: 'absolute top-0 left-0 z-40 w-full h-full bg-black/70', onClick: closeModal })] }));
};
export default Modal;
