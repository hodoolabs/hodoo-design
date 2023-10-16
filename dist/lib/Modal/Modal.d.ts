import { ModalStateType } from '../../types/modal';
export interface ModalProps {
    modalState: ModalStateType;
    modalHistory?: ModalStateType[];
    goBackModal?: () => void;
    isMobile?: boolean;
    closeModal: () => void;
    animationBottomToTop?: boolean;
}
declare const Modal: ({ modalState, modalHistory, goBackModal, closeModal, isMobile, animationBottomToTop, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
