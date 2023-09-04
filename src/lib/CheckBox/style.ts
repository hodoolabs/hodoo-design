import { cva } from 'class-variance-authority';

const CheckBoxStyle = cva(['w-5', 'h-5', 'mt-0.5', 'rounded', 'bg-gray-100'], {
	variants: {
		checked: {
			false: ['border', 'border-gray-300'],
		},
		disabled: {
			true: ['cursor-default'],
			false: [
				'cursor-pointer',
				'focus-visible:ring-gray-950',
				'focus-visible:ring-2',
				'focus-visible:ring-offset-2',
				'focus-visible:outline-none',
			],
		},
	},
});

const LabelStyle = cva(['text-base'], {
	variants: {
		disabled: {
			true: ['text-gray-400', 'cursor-default'],
			false: ['text-gray-900', 'cursor-pointer'],
		},
	},
});

const HelperStyle = cva(['text-sm'], {
	variants: {
		disabled: {
			true: ['text-gray-400'],
			false: ['text-gray-500'],
		},
	},
});

export { CheckBoxStyle, LabelStyle, HelperStyle };
