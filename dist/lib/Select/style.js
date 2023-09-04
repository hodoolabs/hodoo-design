import { cva } from 'class-variance-authority';
var LabelStyle = cva(['text-gray-700', 'font-medium'], {
    variants: {
        size: {
            lg: ['text-sm'],
            md: ['text-xs'],
            sm: ['text-xs'],
        },
    },
});
var SelectedStyle = cva([
    'inline-flex',
    'w-full',
    'items-center',
    'justify-between',
    'ring-1',
    'ring-gray-100',
    'bg-gray-50',
    'text-gray-700',
    'hover:bg-gray-100',
], {
    variants: {
        size: {
            lg: ['px-5', 'py-3.5', 'text-base', 'rounded-xl'],
            md: ['px-4', 'py-2.5', 'text-sm', 'rounded-xl'],
            sm: ['px-3', 'py-2', 'text-xs', 'rounded-lg'],
        },
    },
});
var ArrowStyle = cva([], {
    variants: {
        size: {
            lg: ['w-5', 'h-5'],
            md: ['w-4', 'h-4'],
            sm: ['w-3.5', 'h-3.5'],
        },
    },
});
var ButtonStyle = cva([
    'w-full',
    'px-4',
    'py-3',
    'rounded-lg',
    'outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-gray-950',
    'hover:bg-gray-100',
], {
    variants: {
        center: {
            false: ['flex'],
        },
    },
});
var ListStyle = cva([
    'absolute',
    'z-10',
    'w-full',
    'rounded-lg',
    'font-medium',
    'bg-white',
    'border',
    'shadow-border',
    'max-h-[300px]',
    'overflow-scroll',
    'scroll-none',
], {
    variants: {
        isOpenDown: {
            true: ['bottom-[-8px]', 'translate-y-[100%]'],
            false: ['top-[-8px]', 'translate-y-[-100%]'],
        },
    },
});
var BlankStyle = cva(['absolute', 'w-full', 'h-[8px]'], {
    variants: {
        isOpenDown: {
            true: ['bottom-[-8px]'],
            false: ['top-[-8px]'],
        },
    },
});
export { LabelStyle, SelectedStyle, ArrowStyle, ButtonStyle, ListStyle, BlankStyle };
