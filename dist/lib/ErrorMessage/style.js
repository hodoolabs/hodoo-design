import { cva } from 'class-variance-authority';
const ErrorMessageStyle = cva(['font-medium overflow-hidden text-red-600 duration-300'], {
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
        errorRow: {
            1: [],
            2: [],
        },
    },
    compoundVariants: [
        { isError: true, errorRow: 1, size: 'lg', class: 'h-7' },
        { isError: true, errorRow: 2, size: 'lg', class: 'h-12' },
        { isError: true, errorRow: 1, size: 'md', class: 'h-6' },
        { isError: true, errorRow: 2, size: 'md', class: 'h-11' },
        { isError: true, errorRow: 1, size: 'sm', class: 'h-6' },
        { isError: true, errorRow: 2, size: 'sm', class: 'h-11' },
    ],
});
export { ErrorMessageStyle };
