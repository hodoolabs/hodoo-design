'use client';

import { ModalStateType } from '../../types/modal';
import { cn } from '../../utils/style';
import Header from './Header';
import { ModalStyle } from './style';

export interface ModalProps {
	modalState: ModalStateType;
	modalHistory?: ModalStateType[];
	goBackModal?: () => void;
	closeModal: () => void;
}

const Modal = ({ modalState, modalHistory, goBackModal, closeModal }: ModalProps) => {
	return (
		<div className='fixed top-0 left-0 z-30 flex items-center justify-center w-full h-screen'>
			<div className={cn(ModalStyle({ size: modalState.size }))}>
				<Header modalState={modalState} modalHistory={modalHistory} goBackModal={goBackModal} closeModal={closeModal} />
				<div className='px-6 pb-6 bg-white rounded-b-3xl'>{modalState.content}</div>
			</div>
			<div className='absolute top-0 left-0 z-40 w-full h-full bg-black/70' onClick={closeModal} />
		</div>
	);
};

export default Modal;
