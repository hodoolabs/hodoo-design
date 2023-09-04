import { cva } from 'class-variance-authority';
var ButtonStyle = cva([
    'group',
    'inline-flex',
    'gap-2',
    'items-center',
    'justify-center',
    'disabled:bg-gray-200',
    'disabled:border-0',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'focus-visible:outline-none',
    'focus-visible:ring-gray-950',
], {
    variants: {
        color: {
            black: ['bg-gray-950', 'hover:bg-gray-800'],
            blue: ['bg-blue-100', 'hover:bg-blue-200'],
            white: ['bg-white', 'hover:bg-gray-100'],
            gray: ['bg-gray-100', 'hover:bg-gray-200'],
            red: ['bg-red-100', 'hover:bg-red-200'],
            white_line: ['bg-white', 'hover:bg-gray-100', 'ring-1', 'ring-gray-200'],
        },
        size: {
            lg: ['py-3.5', 'px-5', 'rounded-xl'],
            md: ['py-2.5', 'px-4', 'rounded-xl'],
            base: ['py-2', 'px-3', 'rounded-lg'],
            sm: ['py-2', 'px-3', 'rounded-lg'],
        },
        iconOnly: {
            lg: ['p-3.5'],
            md: ['p-2.5'],
            base: ['p-1'],
            sm: ['p-1.5'],
        },
        isFull: {
            true: 'w-full',
        },
    },
});
var ImageStyle = cva([], {
    variants: {
        color: {
            black: ['text-white'],
            blue: ['text-blue-600'],
            white: ['text-gray-800'],
            gray: ['text-gray-600'],
            red: ['text-red-600'],
            white_line: ['text-gray-800'],
        },
        size: {
            lg: ['w-5', 'h-5'],
            md: ['w-4', 'h-4'],
            base: ['w-3.5', 'h-3.5'],
            sm: ['w-3.5', 'h-3.5'],
        },
        iconOnly: {
            lg: ['w-6', 'h-6'],
            md: ['w-5', 'h-5'],
            base: ['w-6', 'h-6'],
            sm: ['w-5', 'h-5'],
        },
        disabled: {
            true: ['text-gray-400'],
        },
    },
});
var LabelStyle = cva(['font-semibold'], {
    variants: {
        color: {
            black: ['text-white'],
            blue: ['text-blue-600', 'group-hover:text-blue-800'],
            white: ['text-gray-800', 'group-hover:text-gray-900'],
            gray: ['text-gray-600', 'group-hover:text-gray-700'],
            red: ['text-red-600', 'group-hover:text-red-800'],
            white_line: ['text-gray-800', 'group-hover:text-gray-900'],
        },
        size: {
            lg: ['text-base'],
            md: ['text-sm'],
            base: ['text-xs'],
            sm: ['text-xs'],
        },
        disabled: {
            true: ['text-gray-400', 'group-hover:text-gray-400'],
        },
    },
});
export { ButtonStyle, ImageStyle, LabelStyle };
