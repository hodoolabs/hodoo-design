import { create } from 'zustand';

interface ToastStateType {
	toastingTime?: number;
	title: string;
	description?: string | JSX.Element;
	leftButton?: { text: string; onClick: () => void };
	rightButton?: { text: string; onClick: () => void };
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

const initialState: ToastStateType = {
	toastingTime: 0,
	title: '',
	description: '',
	leftButton: { text: '', onClick: () => {} },
	rightButton: { text: '', onClick: () => {} },
	isClose: true,
	position: 'left',
	leftIcon: 'success',
	isOpen: false,
};

const useToast = create<UseToastType>((set) => ({
	toastState: initialState,
	openToast: ({
		toastingTime,
		title,
		description,
		leftButton,
		rightButton,
		isClose,
		position,
		leftIcon,
	}: ToastStateType) => {
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
