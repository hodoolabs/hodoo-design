import { cva } from 'class-variance-authority';

const SpinnerStyle = cva(['animate-spin', 'opacity-100'], {
	variants: {
		size: {
			small: ['w-6', 'h-6'],
			medium: ['w-8', 'h-8'],
			large: ['w-10', 'h-10'],
		},
	},
});

export { SpinnerStyle };
