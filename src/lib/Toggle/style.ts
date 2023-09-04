import { cva } from 'class-variance-authority';

const ToogleBoxStyle = cva(
	[
		'rounded-full',
		'bg-gray-200',
		'cursor-pointer',
		'after:absolute',
		'after:rounded-full',
		'after:bg-white',
		'after:transition-all',
		'peer-checked:bg-gray-900',
		'peer-focus-visible:outline-none',
		'peer-focus-visible:ring-2',
		'peer-focus-visible:ring-gray-950',
		'peer-focus-visible:ring-offset-2',
		'peer-disabled:bg-gray-400',
		'peer-disabled:cursor-default',
	],
	{
		variants: {
			size: {
				sm: [
					'w-9',
					'h-5',
					'after:left-0.5',
					'after:top-0.5',
					'after:h-4',
					'after:w-4',
					'after:scale-90',
					'peer-checked:after:translate-x-4',
				],
				md: [
					'w-11',
					'h-6',
					'after:left-1',
					'after:top-1',
					'after:h-4',
					'after:w-4',
					'after:scale-110',
					'peer-checked:after:translate-x-5',
				],
				lg: [
					'w-14',
					'h-7',
					'after:left-1',
					'after:top-1',
					'after:h-5',
					'after:w-5',
					'peer-checked:after:translate-x-7',
				],
			},
		},
	}
);

const LabelStyle = cva([], {
	variants: {
		size: {
			sm: ['text-sm'],
			md: ['text-base'],
			lg: ['text-base', 'mt-0.5'],
		},
		disabled: {
			true: ['text-gray-400', 'cursor-default'],
			false: ['text-gray-900', 'cursor-pointer'],
		},
	},
});

const HelperStyle = cva(['text-sm'], {
	variants: {
		disabled: {
			true: ['text-gray-400', 'cursor-default'],
			false: ['text-gray-500', 'cursor-pointer'],
		},
	},
});

export { ToogleBoxStyle, LabelStyle, HelperStyle };
