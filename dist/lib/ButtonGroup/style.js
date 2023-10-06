import { cva } from 'class-variance-authority';
const ButtonStyle = cva([
    'py-2.5',
    'px-4',
    'border',
    'text-sm',
    'border-gray-300/70',
    'border-r-0',
    'first:rounded-tl-xl',
    'first:rounded-bl-xl',
    'last:border-r',
    'last:rounded-tr-xl',
    'last:rounded-br-xl',
    'hover:bg-gray-100',
], {
    variants: {
        active: {
            true: ['text-blue-600', 'bg-blue-100', 'border-blue-200', 'active-button', 'hover:bg-blue-100'],
        },
    },
});
export { ButtonStyle };
