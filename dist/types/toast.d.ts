import { ReactNode } from 'react';
type ToastStateType = {
    toastingTime?: number;
    title: string;
    description?: ReactNode;
    leftButton?: {
        text: string;
        onClick: () => void;
    };
    rightButton?: {
        text: string;
        onClick: () => void;
    };
    isClose?: boolean;
    position?: 'left' | 'center' | 'right';
    leftIcon?: 'question' | 'success' | 'warning';
    isOpen?: boolean;
};
export type { ToastStateType };
