'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { cn } from '../../utils/style';
import Header from './Header';
import { ContentStyle, ModalStyle, WrapStyle } from './style';
import useScrollBlock from '../../hooks/useScrollBlock';
const Modal = ({ modalState, modalHistory, goBackModal, closeModal }) => {
    const { blockScroll, allowScroll } = useScrollBlock();
    useEffect(() => {
        if (modalState.isOpen)
            blockScroll();
        else
            allowScroll();
    }, [modalState.isOpen]);
    return (_jsxs("div", { className: ModalStyle({ isOpen: modalState.isOpen }), children: [_jsxs("div", { className: cn(WrapStyle({ size: modalState.size, position: modalState.position })), children: [_jsx(Header, { modalState: modalState, modalHistory: modalHistory, goBackModal: goBackModal, closeModal: closeModal }), _jsx("div", { className: cn(ContentStyle({ position: modalState.position })), children: modalState.content })] }), _jsx("div", { className: 'absolute top-0 left-0 z-40 w-full h-full bg-black/70', onClick: closeModal })] }));
};
export default Modal;
