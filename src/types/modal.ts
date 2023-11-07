import { ReactNode } from 'react';

type ModalType = {
	modalState: ModalStateType;
	modalHistory: ModalStateType[];
	openModal: ({ title, subTitle, content, size }: ModalStateType) => void;
	goBackModal: () => void;
	closeModal: () => void;
};

type ModalStateType = {
	title: string;
	subTitle?: ReactNode;
	content: ReactNode;
	size?: 'lg' | 'sm' | 'mobile';
	isOpen?: boolean;
};

export type { ModalStateType, ModalType };
