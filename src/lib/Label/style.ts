import { cva } from 'class-variance-authority';

const LabelStyle = cva(['font-medium text-gray-700 mb-2'], {
	variants: {
		size: {
			lg: ['text-sm'],
			md: ['text-xs'],
			sm: ['text-xs'],
		},
		error: {
			true: ['text-red-700'],
		},
		disabled: {
			true: ['text-gray-500'],
		},
	},
});

const MaxLengthStyle = cva(['float-right text-gray-500'], {
	variants: {
		error: {
			true: ['text-red-700'],
		},
		disabled: {
			true: ['text-gray-500'],
		},
	},
});

const RequiredStyle = cva(['text-red-600'], {
	variants: {
		disabled: {
			true: ['text-inherit'],
		},
	},
});

export { LabelStyle, RequiredStyle, MaxLengthStyle };
