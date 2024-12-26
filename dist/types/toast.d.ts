type ToastStateType = {
    toastingTime?: number;
    title: string;
    description?: string | JSX.Element;
    leftButton?: {
        text: string;
        onClick: () => void;
    };
    rightButton?: {
        text: string;
        onClick: () => void;
    };
    isClose?: boolean;
    position: 'left' | 'center' | 'right';
    leftIcon: 'question' | 'success' | 'warning';
    isOpen?: boolean;
};
export type { ToastStateType };
