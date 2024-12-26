import { ReactNode } from 'react';
type ToastType = {
    toastState: ToastStateType;
    openToast: ({ toastingTime, title, description, leftButton, rightButton, closeButton, position, leftIcon, }: ToastStateType) => void;
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
    closeButton?: boolean;
    position?: 'left' | 'center' | 'right';
    leftIcon?: 'question' | 'success' | 'warning' | ReactNode;
    isOpen?: boolean;
};
export type { ToastStateType, ToastType };
