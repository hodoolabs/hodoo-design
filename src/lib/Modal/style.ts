import { cva } from 'class-variance-authority';

const ModalStyle = cva(['w-full', 'shadow', 'z-50'], {
	variants: {
		size: {
			lg: ['max-w-xl'],
			sm: ['max-w-md'],
		},
	},
});

export { ModalStyle };
