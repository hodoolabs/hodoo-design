import { cva } from 'class-variance-authority';
const LabelStyle = cva(['font-medium text-sm mb-2 text-gray-700'], {
    variants: {
        isError: {
            true: ['text-red-700'],
        },
    },
});
const ToggleStyle = cva(['absolute h-full left-0 pl-4 pr-3 text-gray-500 rounded-l-xl focus:outline-none'], {
    variants: {
        size: {
            lg: ['py-3.5'],
            sm: ['py-2.5'],
        },
        isError: {
            true: ['text-red-700'],
        },
    },
});
const InputStyle = cva(['cursor-pointer w-full px-4 bg-gray-50 text-gray-900 border-gray-300/70 border rounded-xl hover:bg-gray-100'], {
    variants: {
        size: {
            lg: ['py-3.5 text-base pl-12'],
            sm: ['py-2.5 text-sm pl-11'],
        },
        isError: {
            true: ['text-red-700 border-red-200 bg-red-50 placeholder-red-400 hover:bg-red-50'],
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
const ErrorStyle = cva(['font-medium overflow-hidden text-red-600 duration-300 text-sm h-0 pt-0'], {
    variants: {
        isError: {
            true: ['h-7 pt-2'],
        },
    },
});
export { LabelStyle, ToggleStyle, InputStyle, SkeletonStyle, ErrorStyle };
