import { cva } from 'class-variance-authority';

const TooltipStyle = cva(['absolute w-max'], {
	variants: {
		position: {
			top: ['-translate-x-1/2 -translate-y-full'],
			left: ['-translate-x-full -translate-y-1/2'],
			right: ['translate-x-0 -translate-y-1/2'],
			bottom: ['-translate-x-1/2 translate-y-0'],
		},
	},
});

const WrapStyle = cva(['relative inline-block px-3 py-2 text-sm font-medium rounded-lg shadow-sm'], {
	variants: {
		color: {
			dark: ['text-white bg-gray-900'],
			white: ['text-gray-900 bg-white'],
		},
	},
});

const DescriptionStyle = cva(['mt-0.5 whitespace-pre-line'], {
	variants: {
		color: {
			dark: ['text-gray-400'],
			white: ['text-gray-500'],
		},
	},
});

const ArrowStyle = cva(['absolute w-[17px] h-2'], {
	variants: {
		position: {
			top: ['bottom-[-7px] left-[50%] translate-x-[-50%] rotate-0'],
			left: ['top-[50%] right-[-11px] translate-y-[-50%] rotate-[270deg]'],
			right: ['top-[50%] left-[-11px] translate-y-[-50%] rotate-90'],
			bottom: ['top-[-7px] left-[50%] translate-x-[-50%] rotate-180'],
		},
	},
});

export { TooltipStyle, WrapStyle, DescriptionStyle, ArrowStyle };
