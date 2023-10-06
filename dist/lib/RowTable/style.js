import { cva } from 'class-variance-authority';
const TableHeaderStyle = cva(['font-semibold', 'flex', 'mx-4', 'my-2', 'items-center', 'justify-start', 'min-w-fit'], {
    variants: {
        size: {
            lg: ['text-base'],
            sm: ['text-sm'],
        },
    },
});
const TableBodyStyle = cva(['flex', 'mx-4', 'my-3', 'items-center', 'justify-start', 'min-w-fit'], {
    variants: {
        size: {
            lg: ['text-base'],
            sm: ['text-sm'],
        },
    },
});
export { TableHeaderStyle, TableBodyStyle };
