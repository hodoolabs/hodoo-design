'use client';
import { create } from 'zustand';
const initialState = { title: '', subTitle: null, content: null, size: 'lg', isOpen: false };
const useModal = create((set) => ({
    modalState: initialState,
    modalHistory: [],
    openModal: ({ title, subTitle, content, size }) => {
        set((state) => ({
            modalState: { title, subTitle, content, size, isOpen: true },
            modalHistory: [...state.modalHistory, { title, subTitle, content, size, isOpen: true }],
        }));
    },
    goBackModal: () => {
        set((state) => ({
            modalHistory: state.modalHistory.filter((_item, index) => index !== state.modalHistory.length - 1),
        }));
        set((state) => ({
            modalState: Object.assign({}, state.modalHistory[state.modalHistory.length - 1]),
        }));
    },
    closeModal: () => {
        set(() => ({ modalState: initialState, modalHistory: [] }));
    },
}));
export default useModal;
