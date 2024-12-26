import { ReactNode } from 'react';

type ModalType = {
	modalState: ModalStateType;
	modalHistory: ModalStateType[];
	openModal: ({ title, subTitle, content, size, isOpen }: ModalStateType) => void;
	goBackModal: () => void;
	closeModal: () => void;
};

type ModalStateType = {
	title: string;
	subTitle?: ReactNode;
	content: ReactNode;
	isXButton?: boolean;
	size?: ModalSizeType;
	isOpen?: boolean;
};

type ModalSizeType = 'lg' | 'sm' | 'mobile';

export type { ModalStateType, ModalType, ModalSizeType };
