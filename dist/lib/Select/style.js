import { cva } from 'class-variance-authority';
const BlankStyle = cva(['absolute w-full h-[8px]'], {
    variants: {
        direction: {
            down: ['bottom-[-8px]'],
            up: ['top-[-8px]'],
        },
    },
});
const SelectedStyle = cva([
    'inline-flex w-full items-center justify-between ring-1 ring-gray-300/70 bg-gray-50 text-gray-700 hover:bg-gray-100 disabled:ring-gray-300 disabled:bg-gray-200 disabled:text-gray-400',
], {
    variants: {
        size: {
            lg: ['px-5 py-3.5 text-base rounded-xl'],
            md: ['px-4 py-2.5 text-sm rounded-xl'],
            sm: ['px-3 py-2 text-xs rounded-lg'],
        },
        placeholder: {
            true: ['text-gray-400'],
        },
        error: {
            true: ['ring-rose-200 bg-red-50 text-red-400 hover:bg-red-50'],
        },
    },
});
const ArrowStyle = cva([], {
    variants: {
        size: {
            lg: ['w-5 h-5'],
            md: ['w-4 h-4'],
            sm: ['w-3.5 h-3.5'],
        },
    },
});
const ListStyle = cva([
    'absolute z-10 w-full rounded-lg text-base text-gray-700 font-medium bg-white border shadow-border max-h-[300px] overflow-scroll scroll-none',
], {
    variants: {
        direction: {
            down: ['bottom-[-8px] translate-y-[100%]'],
            up: ['top-[-8px] translate-y-[-100%]'],
        },
    },
});
const ItemStyle = cva([
    'w-full px-4 flex justify-start py-3 rounded-lg cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-gray-950 hover:bg-gray-100',
], {
    variants: {
        center: {
            true: ['justify-center'],
        },
    },
});
const HelperStyle = cva(['text-gray-500 font-medium pt-2'], {
    variants: {
        size: {
            lg: ['text-sm'],
            md: ['text-xs'],
            sm: ['text-xs'],
        },
        disabled: {
            true: ['text-gray-400'],
        },
    },
});
const ErrorStyle = cva(['font-medium overflow-hidden text-red-600 duration-300'], {
    variants: {
        size: {
            lg: ['text-sm h-7'],
            md: ['text-xs h-6'],
            sm: ['text-xs h-6'],
        },
        isError: {
            true: ['pt-2'],
            false: ['h-0 pt-0'],
        },
    },
});
export { ArrowStyle, BlankStyle, ErrorStyle, HelperStyle, ItemStyle, ListStyle, SelectedStyle };
