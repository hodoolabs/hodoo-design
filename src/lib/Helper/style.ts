import { cva } from 'class-variance-authority';

const HelperStyle = cva(['text-gray-500 font-medium pt-2'], {
	variants: {
		size: {
			lg: ['text-sm'],
			md: ['text-xs'],
			sm: ['text-xs'],
		},
		error: {
			true: ['text-red-600'],
		},
		disabled: {
			true: ['text-gray-400'],
		},
	},
});

export { HelperStyle };
