import { cva } from 'class-variance-authority';
const LabelStyle = cva(['font-medium', 'text-sm', 'mb-2'], {
    variants: {
        error: {
            true: ['text-red-700'],
            false: ['text-gray-700'],
        },
    },
});
const ToggleStyle = cva(['absolute', 'h-full', 'left-0', 'pl-4', 'pr-3', 'py-3.5', 'rounded-l-xl', 'focus:outline-none'], {
    variants: {
        error: {
            true: ['text-red-700'],
            false: ['text-gray-500'],
        },
    },
});
const InputStyle = cva(['cursor-pointer', 'w-full', 'px-4', 'pl-12', 'py-3.5', 'bg-gray-50', 'border', 'border-gray-100', 'rounded-xl'], {
    variants: {
        error: {
            true: ['text-red-700', 'border-red-100', 'bg-red-50', 'placeholder-red-400'],
            false: ['bg-gray-50', 'text-gray-900'],
        },
    },
});
const ErrorStyle = cva(['font-medium', 'overflow-hidden', 'text-red-600', 'transition-300', 'text-sm', 'h-7'], {
    variants: {
        error: {
            true: ['pt-2'],
            false: ['h-0', 'pt-0'],
        },
    },
});
export { LabelStyle, ToggleStyle, InputStyle, ErrorStyle };
