import { cva } from 'class-variance-authority';
const LabelStyle = cva(['font-medium text-gray-700 mb-2'], {
    variants: {
        size: {
            lg: ['text-sm'],
            sm: ['text-xs'],
        },
        isError: {
            true: ['text-red-700'],
        },
    },
});
const MaxLengthStyle = cva(['float-right text-gray-500'], {
    variants: {
        isError: {
            true: ['text-red-700'],
        },
    },
});
const TextareaStyle = cva([
    'block w-full rounded-xl border border-gray-300/70 bg-gray-50 text-gray-900 placeholder-gray-400 font-medium disabled:text-gray-500 resize-none scroll-none',
], {
    variants: {
        size: {
            lg: ['px-4 py-3.5 text-base'],
            sm: ['px-4 py-2.5 text-sm'],
        },
        isError: {
            true: ['border-red-200 bg-red-50 text-red-900 placeholder-red-400'],
        },
    },
});
const HelperStyle = cva(['text-gray-500 font-medium pt-2'], {
    variants: {
        size: {
            lg: ['text-sm'],
            sm: ['text-xs'],
        },
    },
});
const ErrorStyle = cva(['font-medium overflow-hidden text-red-600 duration-300'], {
    variants: {
        size: {
            lg: ['text-sm h-7'],
            sm: ['text-xs h-6'],
        },
        isError: {
            true: ['pt-2'],
            false: ['h-0 pt-0'],
        },
    },
});
export { LabelStyle, MaxLengthStyle, TextareaStyle, HelperStyle, ErrorStyle };
