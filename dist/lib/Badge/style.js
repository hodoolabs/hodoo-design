import { cva } from 'class-variance-authority';
const BadgeStyle = cva(['inline-flex items-center justify-center rounded-full'], {
    variants: {
        color: {
            blue: ['text-blue-800 bg-blue-100'],
            gray: ['text-gray-800 bg-gray-100'],
            gray_low: ['text-gray-500 bg-gray-100'],
            red: ['text-red-800 bg-red-100'],
        },
        size: {
            lg: ['py-1 px-4 text-base font-semibold gap-1.5'],
            md: ['py-1.5 px-4 text-sm font-medium gap-1.5'],
            sm: ['py-1 px-3 text-xs font-medium gap-1'],
        },
        iconOnly: {
            lg: ['p-2'],
            md: ['p-2'],
            sm: ['p-1.5'],
        },
    },
});
const LeftImageStyle = cva([], {
    variants: {
        size: {
            lg: ['w-4 h-4'],
            md: ['w-4 h-4'],
            sm: ['w-3.5 h-3.5'],
        },
        iconOnly: {
            lg: ['w-5 h-5'],
            md: ['w-4 h-4'],
            sm: ['w-3 h-3'],
        },
    },
});
const ButtonStyle = cva(['p-0.5 rounded focus-visible:ring-gray-950 focus-visible:ring-2 focus-visible:outline-none'], {
    variants: {
        color: {
            blue: ['text-blue-500 hover:bg-blue-200'],
            gray: ['text-gray-500 hover:bg-gray-200'],
            gray_low: ['text-gray-500 hover:bg-gray-200'],
            red: ['text-red-500 hover:bg-red-200'],
        },
    },
});
const RightImageStyle = cva(['stroke-[3px]'], {
    variants: {
        size: {
            lg: ['w-5 h-5'],
            md: ['w-3.5 h-3.5'],
            sm: ['w-3 h-3'],
        },
    },
});
export { BadgeStyle, LeftImageStyle, ButtonStyle, RightImageStyle };
