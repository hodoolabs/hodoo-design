import { cva } from 'class-variance-authority';

const CheckBoxStyle = cva(
	[
		'w-5 h-5 rounded bg-gray-100 focus-visible:ring-gray-950 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
	],
	{
		variants: {
			checked: {
				false: ['border border-gray-300'],
			},
		},
	}
);

const LabelStyle = cva(['text-base font-medium leading-5  text-gray-900 cursor-pointer'], {
	variants: {
		disabled: {
			true: ['text-gray-400 cursor-default'],
		},
		error: {
			true: ['text-red-900'],
		},
	},
});

const HelperStyle = cva(['text-sm font-medium text-gray-500'], {
	variants: {
		disabled: {
			true: ['text-gray-400'],
		},
		error: {
			true: ['text-red-600'],
		},
	},
});

export { CheckBoxStyle, LabelStyle, HelperStyle };
