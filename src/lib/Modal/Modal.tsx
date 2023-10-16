'use client';

import { useEffect } from 'react';
import useScrollBlock from '../../hooks/useScrollBlock';
import { ModalStateType } from '../../types/modal';
import { cn } from '../../utils/style';
import Header from './Header';
import { ModalContainerStyle, ModalContentStyle, ModalStyle } from './style';

export interface ModalProps {
	modalState: ModalStateType;
	modalHistory?: ModalStateType[];
	goBackModal?: () => void;
	isMobile?: boolean;
	closeModal: () => void;
	animationBottomToTop?: boolean;
}

const Modal = ({
	modalState,
	modalHistory,
	goBackModal,
	closeModal,
	isMobile = false,
	animationBottomToTop,
}: ModalProps) => {
	const { blockScroll, allowScroll } = useScrollBlock();

	useEffect(() => {
		if (modalState.isOpen) blockScroll();
		else allowScroll();
	}, [modalState.isOpen]);

	return (
		<div className={ModalContainerStyle({ isMobile, isModalVisible: modalState.isOpen })}>
			<div className={cn(ModalStyle({ size: modalState.size, animationBottomToTop }))}>
				<Header modalState={modalState} modalHistory={modalHistory} goBackModal={goBackModal} closeModal={closeModal} />
				<div className={cn(ModalContentStyle({ isMobile }))}>{modalState.content}</div>
			</div>
			<div className='absolute top-0 left-0 z-40 w-full h-full bg-black/70' onClick={closeModal} />
		</div>
	);
};

export default Modal;
