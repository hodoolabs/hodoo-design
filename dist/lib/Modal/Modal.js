'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import useScrollBlock from '../../hooks/useScrollBlock';
import { cn } from '../../utils/style';
import Header from './Header';
import { ModalContainerStyle, ModalContentStyle, ModalStyle } from './style';
const Modal = ({ modalState, modalHistory, goBackModal, closeModal, isMobile = false, animationBottomToTop, }) => {
    const { blockScroll, allowScroll } = useScrollBlock();
    useEffect(() => {
        if (modalState.isOpen)
            blockScroll();
        else
            allowScroll();
    }, [modalState.isOpen]);
    return (_jsxs("div", { className: ModalContainerStyle({ isMobile }), children: [_jsxs("div", { className: cn(ModalStyle({ size: modalState.size, animationBottomToTop })), children: [_jsx(Header, { modalState: modalState, modalHistory: modalHistory, goBackModal: goBackModal, closeModal: closeModal }), _jsx("div", { className: cn(ModalContentStyle({ isMobile })), children: modalState.content })] }), _jsx("div", { className: 'absolute top-0 left-0 z-40 w-full h-full bg-black/70', onClick: closeModal })] }));
};
export default Modal;
