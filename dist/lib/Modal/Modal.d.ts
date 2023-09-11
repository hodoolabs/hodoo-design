import { ModalStateType } from '../../stores/useModal';
export interface ModalProps {
    modalState: ModalStateType;
    modalHistory: ModalStateType[];
    goBackModal: () => void;
    closeModal: () => void;
}
declare const Modal: ({ modalState, modalHistory, goBackModal, closeModal }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
