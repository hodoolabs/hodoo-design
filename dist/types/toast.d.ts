import { ReactNode } from 'react';
type ToastType = {
    toastState: ToastStateType;
    openToast: ({ toastingTime, title, description, leftButton, rightButton, isClose, position, leftIcon, }: ToastStateType) => void;
    closeToast: () => void;
};
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
export type { ToastStateType, ToastType };
