import { cva } from 'class-variance-authority';

const ModalStyle = cva(['fixed top-0 left-0 z-30 w-full h-screen z-[999999999]'], {
	variants: {
		isOpen: {
			true: ['visible'],
			false: ['invisible'],
		},
	},
});

const WrapStyle = cva(['absolute w-full shadow z-50'], {
	variants: {
		size: {
			lg: ['max-w-xl'],
			sm: ['max-w-md'],
		},
		position: {
			middle: ['top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'],
			bottom: ['max-w-full bottom-0 left-0'],
		},
	},
});

const ContentStyle = cva(['px-6 pb-6 bg-white'], {
	variants: {
		position: {
			middle: ['rounded-b-3xl'],
			bottom: ['rounded-b-none'],
		},
	},
});

export { ModalStyle, WrapStyle, ContentStyle };
