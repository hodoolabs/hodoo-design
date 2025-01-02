import { cva } from 'class-variance-authority';
const AvatarWrapStyle = cva(['inline-flex relative overflow-hidden bg-gray-100'], {
    variants: {
        type: {
            circular: ['rounded-full'],
            rectangular: ['rounded-2xl'],
        },
        size: {
            xl: ['min-w-36 min-h-36'],
            lg: ['min-w-20 min-h-20'],
            md: ['min-w-16 min-h-16'],
            regular: ['min-w-12 min-h-12'],
            sm: ['min-w-8 min-h-8'],
            xs: ['min-w-6 min-h-6'],
        },
    },
});
export { AvatarWrapStyle };
