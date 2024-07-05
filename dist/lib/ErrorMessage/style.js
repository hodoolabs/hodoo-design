import { cva } from 'class-variance-authority';
const ErrorMessageStyle = cva(['font-medium overflow-hidden text-red-600 duration-300 transition-all'], {
    variants: {
        size: {
            lg: ['text-sm min-h-7'],
            md: ['text-xs min-h-6'],
            sm: ['text-xs min-h-6'],
        },
        isError: {
            true: ['pt-2'],
            false: ['min-h-0 pt-0'],
        },
    },
});
export { ErrorMessageStyle };
