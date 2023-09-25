import { cva } from 'class-variance-authority';
const TableHeaderStyle = cva(['font-semibold', 'flex', 'px-4', 'py-3.5', 'items-center', 'justify-start'], {
    variants: {
        size: {
            lg: ['text-base'],
            sm: ['text-sm'],
        },
    },
});
const TableBodyStyle = cva(['flex', 'px-4', 'py-3.5', 'items-center', 'justify-start'], {
    variants: {
        size: {
            lg: ['text-base'],
            sm: ['text-sm'],
        },
    },
});
export { TableHeaderStyle, TableBodyStyle };
