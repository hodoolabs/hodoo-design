import { cva } from 'class-variance-authority';

const ButtonStyle = cva(
	[
		'inline-flex font-semibold gap-2 items-center justify-center disabled:text-gray-400 disabled:bg-gray-200 disabled:border-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-gray-950',
	],
	{
		variants: {
			color: {
				black: ['text-white bg-gray-950 hover:bg-gray-800'],
				blue: ['text-blue-600 bg-blue-100 hover:text-blue-800 hover:bg-blue-200'],
				white: ['text-gray-800 bg-white hover:text-gray-900 hover:bg-gray-100'],
				gray: ['text-gray-600 bg-gray-100 hover:text-gray-700 hover:bg-gray-200'],
				red: ['text-red-600 bg-red-100 hover:text-red-800 hover:bg-red-200'],
				white_line: ['text-gray-800 bg-white hover:text-gray-900 hover:bg-gray-100 ring-1 ring-gray-300/70'],
			},
			size: {
				lg: ['text-base py-3.5 px-5 rounded-xl'],
				md: ['text-sm py-2.5 px-4 rounded-xl'],
				base: ['text-xs py-2 px-3 rounded-lg'],
				sm: ['text-xs py-2 px-3 rounded-lg'],
			},
			iconOnly: {
				lg: ['p-3.5'],
				md: ['p-2.5'],
				base: ['p-1'],
				sm: ['p-1.5'],
			},
		},
	}
);

const ImageStyle = cva([], {
	variants: {
		size: {
			lg: ['w-5 h-5'],
			md: ['w-4 h-4'],
			base: ['w-3.5 h-3.5'],
			sm: ['w-3.5 h-3.5'],
		},
		iconOnly: {
			lg: ['w-6 h-6'],
			md: ['w-5 h-5'],
			base: ['w-6 h-6'],
			sm: ['w-5 h-5'],
		},
	},
});

export { ButtonStyle, ImageStyle };
