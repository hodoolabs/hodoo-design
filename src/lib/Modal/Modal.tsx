'use client';

import { useEffect } from 'react';
import { cn } from '../../utils/style';
import Header from './Header';
import { ContentStyle, ModalStyle, WrapStyle } from './style';
import { ModalStateType } from '../../types/modal';
import useScrollBlock from '../../hooks/useScrollBlock';

export interface ModalProps {
	modalState: ModalStateType;
	modalHistory?: ModalStateType[];
	goBackModal?: () => void;
	closeModal: () => void;
}

const Modal = ({ modalState, modalHistory, goBackModal, closeModal }: ModalProps) => {
	const { content, size, position, isOpen } = modalState;
	const { blockScroll, allowScroll } = useScrollBlock();

	useEffect(() => {
		if (isOpen) blockScroll();
		else allowScroll();
	}, [isOpen]);

	return (
		<div className={ModalStyle({ isOpen })}>
			<div className={cn(WrapStyle({ size, position }))}>
				<Header modalState={modalState} modalHistory={modalHistory} goBackModal={goBackModal} closeModal={closeModal} />
				<div className={cn(ContentStyle({ position }))}>{content}</div>
			</div>
			<div className='absolute top-0 left-0 z-40 w-full h-full bg-black/70' onClick={closeModal} />
		</div>
	);
};

export default Modal;
