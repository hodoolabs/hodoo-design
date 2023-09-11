'use client';

import { ReactNode } from 'react';
import { create } from 'zustand';

export interface ModalStateType {
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

const initialState: ModalStateType = { title: '', subTitle: null, content: null, size: 'lg', isOpen: false };

const useModal = create<UseModalType>((set) => ({
	modalState: initialState,
	modalHistory: [],
	openModal: ({ title, subTitle, content, size }: ModalStateType) => {
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
			modalState: { ...state.modalHistory[state.modalHistory.length - 1] },
		}));
	},
	closeModal: () => {
		set(() => ({ modalState: initialState, modalHistory: [] }));
	},
}));

export default useModal;
