import { cva } from 'class-variance-authority';
const IndicatorStyle = cva(['bg-red-500 rounded-full flex items-center justify-center text-sm font-semibold text-white p-1'], {
    variants: {
        label: {
            true: ['p-1.5'],
        },
        count: {
            true: ['min-w-[24px] h-6 px-1.5 py-0.5'],
        },
    },
});
export { IndicatorStyle };
