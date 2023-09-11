import { ReactNode } from 'react';
interface ModalStateType {
    title: string;
    subTitle?: ReactNode;
    content: ReactNode;
    size: 'lg' | 'sm';
    isOpen?: boolean;
}
export interface UseModalType {
    modalState: ModalStateType;
    modalHistory: ModalStateType[];
    openModal: ({ title, subTitle, content, size }: ModalStateType) => void;
    goBackModal: () => void;
    closeModal: () => void;
}
declare const useModal: import("zustand").UseBoundStore<import("zustand").StoreApi<UseModalType>>;
export default useModal;
