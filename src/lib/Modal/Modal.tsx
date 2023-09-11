'use client';

import useModal from '../../stores/useModal';
import { cn } from '../../utils/style';
import Header from './Header';
import { ModalStyle } from './style';

const Modal = () => {
	const { modalState, closeModal } = useModal();

	return (
		<div className='fixed top-0 left-0 z-30 flex items-center justify-center w-full h-screen'>
			<div className={cn(ModalStyle({ size: modalState.size }))}>
				<Header />
				<div className='px-6 pb-6 bg-white rounded-b-3xl'>{modalState.content}</div>
			</div>
			<div className='absolute top-0 left-0 z-40 w-full h-full bg-black/70' onClick={closeModal} />
		</div>
	);
};

export default Modal;
