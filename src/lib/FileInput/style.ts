import { cva } from 'class-variance-authority';

const LabelStyle = cva(['font-medium', 'mb-2'], {
	variants: {
		size: {
			lg: ['text-sm'],
			sm: ['text-xs'],
		},
		error: {
			true: ['text-red-700'],
			false: ['text-gray-700'],
		},
	},
});

const ButtonStyle = cva(
	[
		'flex',
		'items-center',
		'justify-center',
		'rounded-l-xl',
		'min-w-fit',
		'text-blue-600',
		'group-hover:text-blue-800',
		'group-hover:bg-blue-200',
		'bg-blue-100',
	],
	{
		variants: {
			size: {
				lg: ['px-5', 'py-3.5', 'text-base'],
				sm: ['px-4', 'py-2.5', 'text-sm'],
			},
		},
	}
);

const InputLabelStyle = cva(
	[
		'flex',
		'items-center',
		'w-full',
		'px-4',
		'cursor-pointer',
		'rounded-r-xl',
		'overflow-hidden',
		'bg-gray-50',
		'border',
		'border-gray-100',
		'group-hover:bg-gray-100',
	],
	{
		variants: {
			size: {
				lg: ['py-3.5', 'text-base'],
				sm: ['py-2.5', 'text-sm'],
			},
			error: {
				value: ['text-gray-900'],
				valueError: ['text-red-900', 'bg-red-50', 'border-red-100', 'group-hover:bg-red-50'],
				placeholder: ['text-gray-400'],
				placeholderError: ['text-red-400', 'bg-red-50', 'border-red-100', 'group-hover:bg-red-50'],
			},
		},
	}
);

const HelperStyle = cva(['text-gray-500', 'font-medium', 'pt-2'], {
	variants: {
		size: {
			lg: ['text-sm'],
			sm: ['text-xs'],
		},
	},
});

const ErrorStyle = cva(['font-medium', 'overflow-hidden', 'text-red-600', 'transition-300'], {
	variants: {
		size: {
			lg: ['text-sm', 'h-7'],
			sm: ['text-xs', 'h-6'],
		},
		error: {
			true: ['pt-2'],
			false: ['h-0', 'pt-0'],
		},
	},
});

export { LabelStyle, ButtonStyle, InputLabelStyle, HelperStyle, ErrorStyle };
