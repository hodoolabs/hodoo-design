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
const MaxLengthStyle = cva(['float-right'], {
    variants: {
        error: {
            true: ['text-red-700'],
            false: ['text-gray-500'],
        },
    },
});
const TextareaStyle = cva(['block', 'rounded-xl', 'border', 'font-medium', 'disabled:text-gray-500', 'resize-none', 'w-full'], {
    variants: {
        size: {
            lg: ['px-4', 'py-3.5', 'text-base'],
            sm: ['px-4', 'py-2.5', 'text-sm'],
        },
        error: {
            true: ['border-red-100', 'bg-red-50', 'text-red-900', 'placeholder-red-400'],
            false: ['border-gray-300/70', 'bg-gray-50', 'text-gray-900', 'placeholder-gray-400'],
        },
    },
});
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
export { LabelStyle, MaxLengthStyle, TextareaStyle, HelperStyle, ErrorStyle };
