import { ModalStateType } from '../../types/modal';
export interface ModalProps {
    modalState: ModalStateType;
    modalHistory?: ModalStateType[];
    goBackModal?: () => void;
    isMobile?: boolean;
    closeModal: () => void;
}
declare const Modal: ({ modalState, modalHistory, goBackModal, closeModal, isMobile }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
