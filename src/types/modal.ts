import { ReactNode } from 'react';

type ModalStateType = {
	title: string;
	subTitle?: string | JSX.Element;
	content: ReactNode;
	size: 'lg' | 'sm';
	isOpen?: boolean;
};

export type { ModalStateType };