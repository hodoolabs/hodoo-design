import { cva } from 'class-variance-authority';
const ButtonStyle = cva([
    'inline-flex font-semibold gap-2 items-center justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-gray-950',
    'disabled:text-gray-400 disabled:bg-gray-200 disabled:border-0 disabled:cursor-not-allowed',
    '[@media(hover:hover)]:hover:enabled:transition-colors',
], {
    variants: {
        color: {
            black: ['text-white bg-gray-950 [@media(hover:hover)]:hover:enabled:bg-gray-800'],
            blue: [
                'text-blue-600 bg-blue-100 [@media(hover:hover)]:hover:enabled:text-blue-800 [@media(hover:hover)]:hover:enabled:bg-blue-200',
            ],
            white: [
                'text-gray-800 bg-white [@media(hover:hover)]:hover:enabled:text-gray-900 [@media(hover:hover)]:hover:enabled:bg-gray-100',
            ],
            gray: [
                'text-gray-600 bg-gray-100 [@media(hover:hover)]:hover:enabled:text-gray-700 [@media(hover:hover)]:hover:enabled:bg-gray-200',
            ],
            red: [
                'text-red-600 bg-red-100 [@media(hover:hover)]:hover:enabled:text-red-800 [@media(hover:hover)]:hover:enabled:bg-red-200',
            ],
            white_line: [
                'text-gray-800 bg-white [@media(hover:hover)]:hover:enabled:text-gray-900 [@media(hover:hover)]:hover:enabled:bg-gray-100 ring-1 ring-gray-300/70 disabled:ring-0',
            ],
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
        disabled: {
            true: ['text-gray-400 bg-gray-200 border-0'],
        },
    },
    defaultVariants: {
        disabled: false,
    },
});
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
