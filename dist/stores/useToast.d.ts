/// <reference types="react" />
interface ToastStateType {
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
}
interface UseToastType {
    toastState: ToastStateType;
    openToast: ({ toastingTime, title, description, leftButton, rightButton, isClose }: ToastStateType) => void;
    closeToast: () => void;
}
declare const useToast: import("zustand").UseBoundStore<import("zustand").StoreApi<UseToastType>>;
export default useToast;
