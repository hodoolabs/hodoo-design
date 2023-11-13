import { cva } from 'class-variance-authority';
const TextareaStyle = cva([
    'block w-full rounded-xl border border-gray-300/70 bg-gray-50 text-gray-900 placeholder-gray-400 font-medium disabled:text-gray-500 disabled:bg-gray-100 resize-none scroll-none',
], {
    variants: {
        size: {
            lg: ['px-4 py-3.5 text-base'],
            sm: ['px-4 py-2.5 text-sm'],
        },
        error: {
            true: ['border-red-200 bg-red-50 text-red-900 placeholder-red-400'],
        },
    },
});
export { TextareaStyle };
