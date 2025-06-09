'use client';

import { ModalStateType } from '../../types/modal';
import { cn } from '../../utils/style';
import Header from './Header';
import { ContentStyle, ModalStyle, WrapStyle } from './style';
export interface ModalProps {
	modalState: ModalStateType;
	modalHistory?: ModalStateType[];
	goBackModal?: () => void;
	closeModal: () => void;
}

const Modal = ({ modalState, modalHistory, goBackModal, closeModal }: ModalProps) => {
	const { content, size, isOpen } = modalState;

	return (
		<div className={ModalStyle({ isOpen })}>
			<div className={cn(WrapStyle({ size }))}>
				<Header modalState={modalState} modalHistory={modalHistory} goBackModal={goBackModal} closeModal={closeModal} />
				<div className={cn(ContentStyle({ size }))}>{content}</div>
			</div>
			<div className='absolute top-0 left-0 z-40 w-full h-full bg-black/70' onClick={closeModal} />
		</div>
	);
};

export default Modal;
