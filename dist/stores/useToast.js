'use client';
import { create } from 'zustand';
const initialState = {
    toastingTime: 5000,
    title: '',
    description: null,
    leftButton: { text: '', onClick: () => { } },
    rightButton: { text: '', onClick: () => { } },
    isClose: true,
    position: 'left',
    leftIcon: 'success',
    isOpen: false,
};
const useToast = create((set) => ({
    toastState: initialState,
    openToast: ({ toastingTime = 5000, title, description, leftButton, rightButton, isClose, position, leftIcon, }) => {
        set(() => ({
            toastState: {
                toastingTime,
                title,
                description,
                leftButton,
                rightButton,
                isClose,
                position,
                leftIcon,
                isOpen: true,
            },
        }));
    },
    closeToast: () => {
        set(() => ({ toastState: initialState }));
    },
}));
export default useToast;
