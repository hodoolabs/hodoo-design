import { cva } from 'class-variance-authority';
var LabelStyle = cva(['font-medium', 'mb-2'], {
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
var MaxLengthStyle = cva(['float-right'], {
    variants: {
        error: {
            true: ['text-red-700'],
            false: ['text-gray-500'],
        },
    },
});
var InputStyle = cva(['block', 'w-full', 'rounded-xl', 'border', 'font-medium', 'disabled:text-gray-500'], {
    variants: {
        size: {
            lg: ['px-4', 'py-3.5', 'text-base'],
            sm: ['px-4', 'py-2.5', 'text-sm'],
        },
        error: {
            true: ['border-rose-100', 'bg-red-50', 'text-red-900', 'placeholder-rose-400'],
            false: ['border-gray-100', 'bg-gray-50', 'text-gray-900', 'placeholder-gray-400'],
        },
    },
});
var HelperStyle = cva(['text-gray-500', 'font-medium', 'pt-2'], {
    variants: {
        size: {
            lg: ['text-sm'],
            sm: ['text-xs'],
        },
    },
});
var ErrorStyle = cva(['font-medium', 'overflow-hidden', 'text-red-600', 'transition-300'], {
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
export { LabelStyle, MaxLengthStyle, InputStyle, HelperStyle, ErrorStyle };
