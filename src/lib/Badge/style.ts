import { cva } from 'class-variance-authority';

const BadgeStyle = cva(['inline-flex', 'items-center', 'justify-center', 'font-medium', 'rounded-full'], {
	variants: {
		color: {
			blue: ['bg-blue-100'],
			gray: ['bg-gray-100'],
			gray_low: ['bg-gray-100'],
			red: ['bg-red-100'],
		},
		size: {
			lg: ['py-1.5', 'px-4', 'text-sm', 'gap-1.5'],
			sm: ['py-1', 'px-3', 'text-xs', 'gap-1'],
		},
		iconOnly: {
			lg: ['p-2'],
			sm: ['p-1.5'],
		},
	},
});

const LeftImageStyle = cva([], {
	variants: {
		color: {
			blue: ['text-blue-800'],
			gray: ['text-gray-800'],
			gray_low: ['text-gray-500'],
			red: ['text-red-800'],
		},
		size: {
			lg: ['w-4', 'h-4'],
			sm: ['w-3.5', 'h-3.5'],
		},
	},
});

const LabelStyle = cva([], {
	variants: {
		color: {
			blue: ['text-blue-800'],
			gray: ['text-gray-800'],
			gray_low: ['text-gray-500'],
			red: ['text-red-800'],
		},
	},
});

const ButtonStyle = cva(
	['p-0.5', 'pointer', 'rounded', 'focus-visible:ring-gray-950', 'focus-visible:ring-2', 'focus-visible:outline-none'],
	{
		variants: {
			color: {
				blue: ['hover:bg-blue-200'],
				gray: ['hover:bg-gray-200'],
				gray_low: ['hover:bg-gray-200'],
				red: ['hover:bg-red-200'],
			},
		},
	}
);

const RightImageStyle = cva(['stroke-[3px]'], {
	variants: {
		color: {
			blue: ['text-blue-500'],
			gray: ['text-gray-500'],
			gray_low: ['text-gray-500'],
			red: ['text-red-500'],
		},
		size: {
			lg: ['w-3.5', 'h-3.5'],
			sm: ['w-3', 'h-3'],
		},
	},
});

export { BadgeStyle, LeftImageStyle, LabelStyle, ButtonStyle, RightImageStyle };
