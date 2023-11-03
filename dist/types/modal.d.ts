import { ReactNode } from 'react';
type ModalStateType = {
    title: string;
    subTitle?: ReactNode;
    content: ReactNode;
    size: 'lg' | 'sm';
    position: 'middle' | 'bottom';
    isOpen?: boolean;
};
export type { ModalStateType };
