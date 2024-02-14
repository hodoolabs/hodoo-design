import { cva } from 'class-variance-authority';

const ErrorMessageStyle = cva(['font-medium overflow-hidden text-red-600 duration-300'], {
	variants: {
		size: {
			lg: ['text-sm h-7'],
			md: ['text-xs h-6'],
			sm: ['text-xs h-6'],
		},
		isError: {
			true: ['pt-2'],
			false: ['h-0 pt-0'],
		},
	},
});

export { ErrorMessageStyle };
