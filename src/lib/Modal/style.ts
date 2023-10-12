import { cva } from 'class-variance-authority';

const ModalContainerStyle = cva(['fixed top-0 left-0 z-30 flex items-center justify-center w-full h-screen'], {
	variants: {
		isMobile: {
			true: ['top-0 '],
			false: ['bottom-0'],
		},
	},
});

const ModalStyle = cva(['w-full', 'shadow', 'z-50'], {
	variants: {
		size: {
			lg: ['max-w-xl'],
			sm: ['max-w-md'],
		},
	},
});

const ModalContentStyle = cva(['px-6 pb-6 bg-white'], {
	variants: {
		isMobile: {
			false: ['rounded-b-3xl'],
		},
	},
});

export { ModalStyle, ModalContainerStyle, ModalContentStyle };
