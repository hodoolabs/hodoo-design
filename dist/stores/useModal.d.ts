import { ReactNode } from 'react';
interface ModalStateType {
    title: string;
    subTitle?: JSX.Element;
    content: ReactNode;
    size: 'lg' | 'sm';
    isOpen?: boolean;
}
interface UseModalType {
    modalState: ModalStateType;
    modalHistory: ModalStateType[];
    openModal: ({ title, subTitle, content, size }: ModalStateType) => void;
    goBackModal: () => void;
    closeModal: () => void;
}
declare const useModal: import("zustand").UseBoundStore<import("zustand").StoreApi<UseModalType>>;
export default useModal;
