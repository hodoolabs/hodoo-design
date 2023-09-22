import { cva } from 'class-variance-authority';
const LabelStyle = cva(['font-medium', 'text-sm', 'mb-2'], {
    variants: {
        error: {
            true: ['text-red-700'],
            false: ['text-gray-700'],
        },
    },
});
const ToggleStyle = cva(['absolute', 'h-full', 'left-0', 'pl-4', 'pr-3', 'rounded-l-xl', 'focus:outline-none'], {
    variants: {
        size: {
            lg: ['py-3.5'],
            sm: ['py-2.5'],
        },
        error: {
            true: ['text-red-700'],
            false: ['text-gray-500'],
        },
    },
});
const InputStyle = cva(['cursor-pointer', 'w-full', 'px-4', 'bg-gray-50', 'border', 'rounded-xl'], {
    variants: {
        size: {
            lg: ['py-3.5', 'text-base', 'pl-12'],
            sm: ['py-2.5', 'text-sm', 'pl-11'],
        },
        error: {
            true: ['text-red-700', 'border-red-200', 'bg-red-50', 'placeholder-red-400'],
            false: ['bg-gray-50', 'text-gray-900', 'border-gray-300/70'],
        },
    },
});
const SkeletonStyle = cva(['cursor-pointer', 'w-full', 'px-4', 'bg-gray-50', 'border', 'rounded-xl'], {
    variants: {
        size: {
            lg: ['h-[54px]', 'text-base', 'pl-12'],
            sm: ['h-[42px]', 'text-sm', 'pl-11'],
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
export { LabelStyle, ToggleStyle, InputStyle, SkeletonStyle, ErrorStyle };
