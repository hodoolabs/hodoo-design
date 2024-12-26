import { cva } from 'class-variance-authority';
const ToggleStyle = cva(['absolute h-full left-0 pl-4 pr-3 text-gray-500 rounded-l-xl focus:outline-none'], {
    variants: {
        size: {
            lg: ['py-3.5'],
            sm: ['py-2.5'],
        },
        error: {
            true: ['text-red-700'],
        },
        disabled: {
            true: ['text-gray-400'],
        },
    },
});
const InputStyle = cva(['cursor-pointer w-full px-4 bg-gray-50 text-gray-900 border-gray-300/70 border rounded-xl hover:bg-gray-100'], {
    variants: {
        size: {
            lg: ['py-3.5 text-base pl-12'],
            sm: ['py-2.5 text-sm pl-11'],
        },
        error: {
            true: ['text-red-700 border-red-200 bg-red-50 placeholder-red-400 hover:bg-red-50'],
        },
        disabled: {
            true: ['ring-gray-200 bg-gray-100 text-gray-400 cursor-default'],
        },
    },
});
const SkeletonStyle = cva(['w-full bg-gray-50 border rounded-xl'], {
    variants: {
        size: {
            lg: ['h-[54px]'],
            sm: ['h-[42px]'],
        },
    },
});
export { ToggleStyle, InputStyle, SkeletonStyle };
