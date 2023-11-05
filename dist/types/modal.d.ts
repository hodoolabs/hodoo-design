import { ReactNode } from 'react';
type ModalType = {
    modalState: ModalStateType;
    modalHistory: ModalStateType[];
    openModal: ({ title, subTitle, content, size, position }: ModalStateType) => void;
    goBackModal: () => void;
    closeModal: () => void;
};
type ModalStateType = {
    title: string;
    subTitle?: ReactNode;
    content: ReactNode;
    size?: 'lg' | 'sm';
    position?: 'middle' | 'bottom';
    isOpen?: boolean;
};
export type { ModalStateType, ModalType };
