import { cva } from 'class-variance-authority';
export var AvatarStyle = cva(['inline-flex', 'rounded-full'], {
    variants: {
        size: {
            xl: ['w-36', 'h-36'],
            lg: ['w-20', 'h-20'],
            md: ['w-12', 'h-12'],
            regular: ['w-8', 'h-8'],
            sm: ['w-6', 'h-6'],
        },
    },
});
